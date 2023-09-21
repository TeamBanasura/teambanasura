import asyncHandler from '../custommiddlewares/asynchandler.js';
import cabModel from '../models/cabmodel.js';

const getCabs = asyncHandler(async (req,res)=>{
    console.log('fetching cabs....');
    const cabs = await cabModel.find();
    res.json(cabs);
});

const getCabById = asyncHandler(async (req,res)=>{
    const cab = await cabModel.findById(req.params.id);
    if(cab){
        res.json(cab);
    }
    res.status(404).send({message:'Product not found'});
});

export {getCabs,getCabById};