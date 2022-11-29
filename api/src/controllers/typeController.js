import { TypeModel } from '../models';
import { DetailsModel } from '../models';
import { ImageModel } from '../models';
import { ColorModel } from '../models';

export const getTypes = async (req, res) => {
    try {
        const types = await TypeModel.find();
        const details = await DetailsModel.find();
        const images = await ImageModel.find();
        const colors = await ColorModel.find();
        res.status(200).send({
            success: true,
            message: 'All types fetched successfully',
            // data: types,
            // show the details_name and image and color_code
            data: types.map((type) => {
                return {
                    type_name: type.type_name,
                    config: {
                        details: details.map((detail) => {
                            return {
                                details_name: detail.details_name,
                                details_description: detail.details_description,
                            };
                        }),

                        images: images.map((image) => {
                            return {
                                image_name: image.name_image,
                                image: image.image,
                            };
                        }),

                        colors: colors.map((color) => {
                            return {
                                color_name: color.color_name,
                                color_code: color.color_code,
                            };
                        }),
                    },
                };
            }),
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};

export const createType = async (req, res) => {
    try {
        const { type_name, config } = req.body;
        const existingType = await TypeModel.findOne({ type_name });
        if (existingType) {
            return res.status(409).send({
                success: false,
                message: 'Type name already exists',
            });
        }

        for (let i = 0; i < config.details.length; i++) {
            const detail = await DetailsModel.findById(config.details[i]);
            if (!detail) {
                return res.status(404).send({
                    success: false,
                    message: 'Detail not found',
                });
            }
        }
        for (let i = 0; i < config.image.length; i++) {
            const image = await ImageModel.findById(config.image[i]);
            if (!image) {
                return res.status(404).send({
                    success: false,
                    message: 'Image not found',
                });
            }
        }
        for (let i = 0; i < config.color.length; i++) {
            const color = await ColorModel.findById(config.color[i]);
            if (!color) {
                return res.status(404).send({
                    success: false,
                    message: 'Color not found',
                });
            }
        }
        const type = await TypeModel.create({
            type_name,
            config,
        });
        res.status(201).send({
            success: true,
            message: 'Type created successfully',
            data: type,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};