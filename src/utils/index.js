exports.addMovie = async (collection, movieObj) => {
    try {
        const addEntry = await collection.insertOne(movieObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (collection, movieObj) => {
    try {
        const deleteEntry = await collection.deleteOne(movieObj);
        console.log(deleteEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (collection, movieObj) => {
    try {
        const updateEntry = await collection.updateOne(movieObj);
        console.log(updateEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error);
    }
};


