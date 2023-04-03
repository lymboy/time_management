import { http } from '@/common/service/service.js' 
import configService from '@/common/service/config.service.js';
const apiService = {
	 
	 /**
	  * 登录
	  */
	login(params) {
		return http.post('/sys/mLogin',params)	
	},
	/**
	  * 手机号码登录
	  */
	phoneNoLogin(params) {
		return http.post('/sys/phoneLogin',params);
	},
	/**
	  * 退出
	  */
	logout(params) {
		return http.post('/sys/logout',params);
	},
	/**
	 * 获取文件访问路径
	 * @param avatar
	 * @param subStr
	 * @returns {*}
	 */
	getFileAccessHttpUrl(avatar,subStr){
	    if(!subStr) subStr = 'http'
	    if(avatar && avatar.startsWith(subStr)){
	        return avatar;
	    }else{
	        return configService.staticDomainURL + "/" + avatar;
	    }
	},
    getUserInfo(userId) {
        return http.get(`/sys/user/queryById?id=${userId}`)
    },
    /**
     * 获取工艺卡详情
     * @param {Object} craftId
     */
    getCraftDetail(craftId) {
        return http.get(`/online/cgform/api/detail/1639534693131042817/${craftId}`)
    },
    /**
     * 保存工时
     * @param {Object} data
     */
    saveClaim(data) {
        return http.post(`/online/cgform/api/form/1639536803344105474?tabletype=1`, data)
    },
    getClaimList(params) {
        return http.get(`/online/cgform/api/getData/1639536803344105474?hasQuery=true&column=id&order=asc&pageNo=${params.current}&pageSize=${params.pageSize}&_t=${Date.now()}`)
    },
    getPartLeftTime(processId, partNo) {
        return http.get(`/wkt/claim/partLeftTime?processId=${processId}&partNo=${partNo}`)
    },
    validateLeftTime(processId, partNo, workTime) {
        return http.get(`/wkt/claim/validateLeftTime?processId=${processId}&partNo=${partNo}&workTime=${workTime}`)
    }
};

export default apiService;
