import DonationCards from "./DonationCards";

const Donations = ({donations}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                donations?.map(donation => <DonationCards donation={donation}></DonationCards>)
            }
        </div>
    );
};

export default Donations;