import { api } from './axios';


// هباب 
export const getCompanyInfo = (id = 2) => {
  return api.get(`info/company/${id}`);
};
