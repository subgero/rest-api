import express from "express";
import dotenv from 'dotenv';

import { DynamoDBClient, ScanCommand, QueryCommand } from '@aws-sdk/client-dynamodb';

dotenv.config();

const region = process.env.REGION;
let TableName = process.env.TABLENAME;

let dbb = new DynamoDBClient({ region });

const router = express.Router();

router.get('/', async (req, res) => {

    const input = {
        TableName: TableName
    }        
   
    const command = new ScanCommand(input);

    try {
        const response = await dbb.send(command);
        res.send(response);       
    } catch (error) {
        console.log("Error getting items", error);
        res.send(error);
    }


});

router.get('/:id', async (req, res) => {

    let id = req.params.id;

    const input = {
        TableName: TableName,
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: {
            ":id": {
                S: id
            }
        }
    }        
   
    const command = new QueryCommand(input);

    try {
        const response = await dbb.send(command);
        res.send(response);       
    } catch (error) {
        console.log("Error getting item", error);
        res.send(error);
    }


});


export default router;