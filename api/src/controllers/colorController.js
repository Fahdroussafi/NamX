import {ColorModel} from '../models';

export const createColor = async (req, res) => {
    try {
        const existingColor = await ColorModel.findOne({
            color_name: req.body.color_name,
        });
        if (existingColor) {
            return res.status(400).send({
                message: 'Color already exists',
                success: false,
                data: null,
            });
        }
        const newColor = new ColorModel({
            color_name: req.body.color_name,
            color_code: req.body.color_code,
        });
        await newColor.save();
        res.status(200).send({
            message: 'Color created successfully',
            success: true,
            data: newColor,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
            data: null,
        });
    }
};

export const getColors = async (req, res) => {
    try {
        const colors = await ColorModel.find();
        res.status(200).send({
            message: 'Colors fetched successfully',
            success: true,
            data: colors,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
            data: null,
        });
    }
};

// update a color by id_color
export const updateColor = async (req, res) => {
    try {
        const color = await ColorModel.findById(req.params.color_id);
        if (!color) {
            return res.status(400).send({
                message: 'Color not found',
                success: false,
                data: null,
            });
        }
        const existingColor = await ColorModel.findOne({
            color_name: req.body.color_name,
        });
        if (existingColor) {
            return res.status(400).send({
                message: 'Color already exists',
                success: false,
            });
        }
        color.color_name = req.body.color_name;
        color.color_code = req.body.color_code;
        await color.save();
        res.status(200).send({
            message: 'Color updated successfully',
            success: true,
            data: color,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
        });
    }
}
// delete a color
export const deleteColor = async (req, res) => {
    try {
        const color = await ColorModel.findById(req.params.color_id);
        if (!color) {
            return res.status(400).send({
                message: 'Color not found',
                success: false,
            });
        }
        await ColorModel.findByIdAndDelete(req.params.color_id);
        res.status(200).send({
            message: 'Color deleted successfully',
            success: true,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
        });
    }
}