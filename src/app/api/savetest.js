const campaign = require('@/mock/campaign');

export default function handler(req, res) {
    res.status(200).json(campaign);
}