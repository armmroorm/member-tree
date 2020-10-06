const express = require('express');
const router = express.Router();

const SQL_DB = require('./MySQL_DB');

router.get('/', (req, res) => {
    const { select_id } = req.body;
    let sql1 = 'SELECT * FROM member_node WHERE member_id = 12';
    SQL_DB.query(sql1, null, (data, err) => {
        if (err) throw err;
        console.log(data);
        let sql2 = `SELECT member_node.member_id,
        member_node.parent_id,
        member_node.curr_active_mp
        FROM member_node 
        WHERE member_node.parent_id = ${data[0].member_id}`;
        SQL_DB.query(sql2, null, async (data2, err) => {
            if (err) throw err;
            let treeObj = {};
            treeObj.member_id = data[0].member_id;
            treeObj.curr_active_mp = data[0].curr_active_mp;
            treeObj.parent_id = [];
            await data2.map(dt => {

                // var childObj = {};
                // let sql3 = `SELECT member_node.member_id,
                // member_node.parent_id,
                // member_node.curr_active_mp
                // FROM member_node 
                // WHERE member_node.parent_id = ${dt.member_id}`;
                // SQL_DB.query(sql3, null, async(data3, err) => {
                //     if (err) throw err;
                //     childObj.member_id = data3[0].member_id;
                //     childObj.curr_active_mp = data3[0].curr_active_mp;
                //     childObj.parent_id = [];
                //     if(data3.length!==0){
                //         await data3.map(dt3=>{
                //             if(typeof dt3.member_id!==undefined){
                //                 childObj.parent_id.push({
                //                     member_id:dt3.member_id,
                //                     curr_active_mp:dt3.curr_active_mp
                //                 })
                //             }
                //         })
                //     }
                // })
                // console.log('child : ',childObj);
                treeObj.parent_id.push({
                    member_id:dt.member_id,
                    curr_active_mp:dt.curr_active_mp
                })
            })
            await console.log(treeObj);
            res.send({ data: treeObj });
        });
    })
});

module.exports = router;

// treeObj.parent_id.push({
                //     member_id:dt.member_id,
                //     curr_active_mp:dt.curr_active_mp
                // })