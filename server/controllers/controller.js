const { JobListing, Company } = require('../models');

class Controller {
    static async getJobList(req, res){
        try {
            const jobList = await JobListing.findAll({
                include: [
                    {
                        model: Company,
                        attributes: ['companyName', 'address', 'website']
                    }
                ]
            })

            res.status(200).json(jobList)
        } catch (err) {
            console.log(err)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

module.exports = Controller;