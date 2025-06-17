export const filterWorkshops = (workshops:any[],filters:any) => {
    console.log(workshops);
    console.log(filters);
    console.log("test funkcji");
    return workshops.filter((workshop:any)=> {

        // const metchesAdditional = !filters.additional||workshop.additional.toLowerCase()===filters.additional.toLowerCase();
        // const metchesAvailability = !filters.availability||workshop.availability.toLowerCase()===filters.availability.toLowerCase();
        const metchesBrands = !filters.brands||workshop.partnerBrands.some((brands:any) => brands.name.toLowerCase() === filters.brands.toLowerCase());
        const metchesDistricts = !filters.districts||workshop.address.district.toLowerCase()===filters.districts.toLowerCase();
        const metchesNetworks = !filters.networks||workshop.networks.some((networks:any) => networks.name.toLowerCase() === filters.networks.toLowerCase());


        return metchesBrands && metchesDistricts && metchesNetworks
    })

};
