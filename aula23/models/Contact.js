
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        'Contact',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            message: DataTypes.STRING,
            deleted: DataTypes.BOOLEAN,

        },
        {
            tableName: 'contacts'
        }
    );

    return Contact;
}