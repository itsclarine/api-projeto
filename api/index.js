module.exports = (req, res) => {
    return res.status(200).json({
        message: "API online",
        salutation: "Olá Renan! Bem vindo a minha API!"
    });
}