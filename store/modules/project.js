import storage from '@/util/storage.js'
import config from '@/common/config.js'
export default {
	state: {
		projectList: [],
		project: null
	},
	getters: {
		getProject: state => state.project,
	},
	mutations: {
		setProject(state, project) {
			state.project = project;
		}
	},
	actions: {

	},
}
