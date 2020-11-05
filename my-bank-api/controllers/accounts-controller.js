import express from 'express';
import mongoose from 'mongoose';
//Carregar Models
import { accountModel } from '../models/accounts.js'
// const accountModel = mongoose.model('accountModel')

let controller = {};

// GETS
controller.get = async (_, res, next) => {
    const account = await accountModel.find({});
    try {
        res.send(account)
    } catch (error) {
        next(error);
    };
};

controller.getBalance = async (req, res, next) => {
    try {
        const account = await accountModel.findOne({
            agencia : req.params.ag,
            conta : req.params.acc
        });

        if (!!account) {
            res.send({nome: account.name, balance: account.balance})
        } else {
            res.send('Conta ou agência não existe')
        }
    } catch (error) {
        next(error);
    }

}

// POSTS
controller.post = async (req, res, next) => {
    const account1 = req.body
    const account = new accountModel(req.body);

    try {
        await account.save();
        res.send(account);
    } catch (err) {
        next(error);
    };
};

controller.postMany = async (req, res, next) => {
   
    try {
        await accountModel.insertMany(req.body);
        res.send("Registros inseridos com sucesso")
    } catch (error) {
        next(error);
    };
};

// PATCH
controller.patchBalanceInc = async (req, res, next) => {
    try {
        // const account = await accountModel.findOneAndUpdate({
        //     agencia : req.params.ag,
        //     conta : req.params.acc
        // },{$inc : {
        //     balance : req.params.dep
        // }});

        const account = await accountModel.findOneAndUpdate(
            {
                agencia : req.params.ag,
                conta : req.params.acc
            }, 
            { $inc: { balance: req.params.dep } },
            { new: true }
        );
        
        if (!!account) {
            res.send(`Conta atualizada com sucesso: ${account.balance}`);
        } else {
            res.send('A conta não existe');
        };

    } catch (error) {
        next(error);
    };
};

controller.patchBalanceDcm = async (req, res, next) => {
    try {

        const balanceAcc = await accountModel.findOne({
            agencia : req.params.ag,
            conta : req.params.acc
        });

        if (!!balanceAcc) {
            const { balance, _id } = balanceAcc;
            const balanceReq = parseInt(req.params.dep, 10) 
            console.log(balance)
            console.log(balanceReq + 1)
            if (balance >= (balanceReq + 1)){
    
                const account = await accountModel.findOneAndUpdate(
                    {
                        _id : _id
                    }, 
                    { $inc: { balance: (balanceReq * -1 ) - 1}  },
                    { new: true }
                );

                res.send(`Conta atualizada com sucesso: ${account.balance}`);
            } else {
                res.send('Saldo insuficiente')
            }
                    
        } else {
            res.send('Conta ou agência não existe');
        };

    } catch (error) {
        next(error);
    };
};

controller.transaction = async (req, res, next) => {
    try {
        const oriAcc = await accountModel.findOne({
            conta : req.params.ogAcc
        });

        if (!!oriAcc){
            const desAcc = await accountModel.findOne({
                conta : req.params.desAcc
            });

            const value = parseInt(req.params.transValue, 10)

            if (oriAcc.balance > value) {
                if (!!desAcc) {
                    if (oriAcc.agencia === desAcc.agencia) {

                        const oriAccount = await accountModel.findOneAndUpdate(
                            {
                                agencia: oriAcc.agencia,
                                conta: oriAcc.conta
                            },
                            { $inc: { balance: (value * -1) } },
                            { new: true }
                        );
                        
                            await accountModel.findOneAndUpdate(
                            {
                                agencia: desAcc.agencia,
                                conta: desAcc.conta
                            },
                            { $inc: { balance: value} },
                            { new: true }
                        );

                        res.send(oriAccount)
                    } else {
                        const oriAccount = await accountModel.findOneAndUpdate(
                            {
                                agencia: oriAcc.agencia,
                                conta: oriAcc.conta
                            },
                            { $inc: { balance: (value * -1) - 8} },
                            { new: true }
                        );
                        
                            await accountModel.findOneAndUpdate(
                            {
                                agencia: desAcc.agencia,
                                conta: desAcc.conta
                            },
                            { $inc: { balance: value} },
                            { new: true }
                        );

                        res.send(oriAccount)
                    }
                    
                } else {
                    res.send('Consta de destino não existe')
                }
            } else {
                res.send('Saldo insuficiente')
            }
        } else {
            res.send('Conta de origem não existe')
        }

    } catch (error) {
        next(error)
    }
}

// DELETE
controller.deleteOne = async (req, res, next) => {
    try {
        const account = await accountModel.findOneAndDelete({
            agencia : req.params.ag,
            conta : req.params.acc
        });

        if (!!account) {
            controller.get(req, res, next)
        } else {
            res.send('Conta ou agência não existe')
        }

    } catch (error) {
        next(error);
    }
}

export {controller};