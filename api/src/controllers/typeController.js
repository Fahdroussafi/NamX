import {ColorModel, DetailsModel, ImageModel, TypeModel} from '../models';

export const getTypes = async (req, res) => {
    try {
        const types = await TypeModel.find();
        res.status(200).send({
            success: true,
            message: 'All types fetched successfully',
            data: types,
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
        const {type_name, config} = req.body;
        const type = await TypeModel.create({
            type_name,
            config,
        });
        // check if the ids in config are in the database and if not, return an error

        const details = await DetailsModel.findById({details_id});
        const image = await ImageModel.findById({image_id});
        const color = await ColorModel.findById({color_id});
        // if those ids are not the same as the ones in the database, return an error
        if (!details || !image || !color) {
            return res.status(400).send({
                success: false,
                message: 'Invalid config',
            });
        } else if (details && image && color) {
            res.status(201).send({
                success: true,
                message: 'Type created successfully',
                data: type,
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};


