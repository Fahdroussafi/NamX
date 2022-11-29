import {ColorModel, DetailsModel, ImageModel, TypeModel} from '../models';


//get all types and names of types, details, images, colors
export const getTypes = async (req, res) => {
    try {


export const createType = async (req, res) => {
    try {
        const {type_name, config} = req.body;
        const existingType = await TypeModel.findOne({type_name});
        if (existingType) {
            return res.status(409).send({
                success: false,
                message: 'Type name already exists',
            });
        }

        // check if the ids in config are in the database and if not, return an error

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
        // if those ids are not the same as the ones in the database, return an error

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


