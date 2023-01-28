const Location = require("../models/Location");

module.exports = {
    Query: {
        async location(_, { id }) {
            try {
                const location = await Location.findByIdAndUpdate(id, { $inc: { visits: 1 } });
                return location;
            } catch (error) {
                console.error(new Date(), error);
            }
        },

        async locations(_, { limit, page }) {
            try {
                const locations = await Location.find()
                    .sort({ _id: -1 })
                    .skip(limit * (page - 1))
                    .limit(limit);
                return locations;
            } catch (error) {
                console.error(new Date(), error);
            }
        },
    },

    Mutation: {
        async addLocation(_, { input }) {
            try {
                const newLocation = await Location.create({
                    ...input,
                });
                return newLocation;
            } catch (error) {
                console.error(new Date(), error);
            }
        },

        async editLocation(_, { id, input }) {
            try {
                const edition = await Location.findByIdAndUpdate(id, { ...input });
                return !!edition;
            } catch (error) {
                console.error(new Date(), error);
            }
        },

        async deleteLocation(_, { id }) {
            try {
                const deleted = await Location.deleteOne({ _id: id });
                return !!deleted.deletedCount;
            } catch (error) {
                console.error(new Date(), error);
            }
        },
    },
};
