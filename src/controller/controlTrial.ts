import express, { Request, Response } from "express";

export const controlTrial = async (req : Request, res : Response) => {
    try {
		res.json({ message: "This is a Trial Run!" });

    } catch (error) {
        res.status(404).json( {message : 'Error'} )
    }
}