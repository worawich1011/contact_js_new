const express = require('express');
const route = express.Router();

const controllersTecher = require('../controllers/teacher')
const teacherModel = require('../models/teacher');


route.get('/', controllersTecher.getteacher);
// route.post('/', controllersTecher.createteacher);
route.post('/', async (req, res) => {

    try {

        let data = req.body;

        // console.log()
        const teacher = new teacherModel({
            name: data.name,
            email: data.email,
            nameTH: data.nameTH,
            group: data.group,
            img: data.image
        });
        await teacher.save();
        
        res.status(200).json({...teacher});
        
    } catch (err) { res.status(500).json({ msg: err.message}) }

});


route.delete('/:teacher_id', async (req, res) => {

    try {
        
        const { teacher_id } = req.params;

        const teacher = await teacherModel.findOneAndDelete({ _id: teacher_id });

        res.status(200).json({ val: teacher_id });

    } catch (err) { res.status(500).json({ msg: err.message }) }

});


route.get('/find/:keyword', async (req, res) => {
    
    try {

        let keyword = req.params.keyword;
    
        let result = await teacherModel.find({
            $or: [
                { nameTH: { $regex: keyword, $options: 'i' } },
                { name: { $regex: keyword, $options: 'i' } },
                { email: { $regex: keyword, $options: 'i' } },
                { group: { $regex: keyword, $options: 'i' } }
            ]
        });

        res.status(200).json({...result});
        
    } catch (err) { res.status(500).json({ msg: err.message }) }

});


module.exports = route;