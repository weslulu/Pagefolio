import { createContext, useContext, useEffect, useState } from 'react';
import { getCompanyInfo } from '../Api/companiesAPI';

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designData, setDesignData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanyInfo()
      .then(res => {
        const layout1Page = res.data.data.find(p => p.layout === "1");
        if (!layout1Page) return;

        const base = "http://68.183.28.116/storage/";
        const company = layout1Page.company;
        const sections = layout1Page.sections[0];

        setDesignData({
          // ألوان
          themeColor1: layout1Page.theme_color1,
          themeColor2: layout1Page.theme_color2,
          textColor1: layout1Page.text_color1,
          textColor2: layout1Page.text_color2,

          // بيانات الشركة
          logo: `${base}${company.logo_url}`,
          companyName: company.name,
          slogan: company.slogan,
          email: company.email,

          // أقسام الموقع
          sections: {
            whoWeAre: {
              section_name: sections.back_title?.section_name,
              text: sections.back_title?.background?.content,
              image: `${base}${sections.back_title?.background?.image?.image_url}`
            },
            services: {
              section_name: sections.service_title?.section_name,
              items: sections.service_title?.services?.map(s => ({
                text: s.content,
                image: `${base}${s.image.image_url}`
              })) || []
            },
            objectives: {
              section_name: sections.objective_title?.section_name,
              items: sections.objective_title?.objectives?.map(o => ({
                text: o.content,
                icon: `${base}${o.icon.icon_url}`
              })) || []
            },
            partners: {
              title: sections.partner_title?.section_name,
              subtitle: sections.partner_title?.sub_title,
              list: sections.partner_title?.partners?.map(p => ({
                image: `${base}${p.image.image_url}`
              })) || []
            },
          feedbacks: {
  section_name: sections.feedback_title?.section_name,
  icon: `${base}${sections.feedback_title?.feedback_icon}`,
  items: sections.feedback_title?.feedbacks?.map(f => ({
    id: f.id,
    name: f.user,
    rating: f.rating,
    comment: f.content,
    image: f.image?.image_url ? `${base}${f.image.image_url}` : null,
  })) || []
},

            eotm: {
              section_name: sections.eotm_title?.section_name,
              items: sections.eotm_title?.employee_of_the_months?.map(e => ({
                name: e.employee_name,
                content: e.content,
                image: `${base}${e.image.image_url}`
              })) || []
            },
            location: sections.location_title?.locations[0]
              ? {
                  section_name: sections.location_title?.section_name,
                  city: sections.location_title.locations[0].city_name,
                  content: sections.location_title.locations[0].content,
                  mapUrl: sections.location_title.locations[0].location_url,
                  image: `${base}${sections.location_title.locations[0].image.image_url}`
                }
              : null,
            socials: sections.company_media_accounts?.map(s => ({
              icon: `${base}${s.icon.icon_url}`,
              link: s.username_account
            })) || []
          }
        });

        setLoading(false);
      })
      .catch(err => {
        console.error("فشل تحميل البيانات:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DesignContext.Provider value={{ designData, loading }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => useContext(DesignContext);
