import instance from "../instances/instance"

// create nodeServices
const nodeServices = {
    getNotes: async () => {
        return await instance.get('/notes');
    },

    getNodesById: async (id) => {
        return await instance.get(`/notes/${id}`);
    }

}

export default nodeServices;