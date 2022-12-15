import { useState } from "react";
import FileInput from "../FileInput";
import { axiosInstance } from "../../helpers/axiosInstance";
import styles from "./styles.module.css";
import { message } from "antd";

const ImagesForm = () => {
  const [data, setData] = useState({
    name: "",
    img: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name === "" || data.img === "") {
      message.error("Please fill all the fields");
    } else {
      try {
        const url = process.env.REACT_APP_API_URL + "/image/create-image";
        const { data: res } = await axiosInstance.post(url, data);
        if (res.success) {
          message.success(res.message);
          window.location.reload();
        }
      } catch (error) {
        message.error(error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Images Form</h1>
        <input
          type="text"
          className={styles.input}
          placeholder="Image Name"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <FileInput
          name="img"
          label="Choose Image"
          handleInputState={handleInputState}
          type="image"
          value={data.img}
        />
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImagesForm;
