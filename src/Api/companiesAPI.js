import { api } from './axios';


// هباب 
export const getCompanyInfo = (id =1) => {
  return api.get(`info/company/${id}`);
};
