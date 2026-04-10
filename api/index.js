module.exports = (req, res) => {
    return res.status(200).json({
        message: "API online",
        salutation: "Oiii pedo fedido"
    });

    return res.status(404).json({
        message: "API não encontrada!"
    })
}