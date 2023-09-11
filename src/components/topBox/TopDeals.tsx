import { topDealUsers } from "../../data";
import "./TopDeals.scss";
const TopDeals = () => {
  return (
    <div>
      <h1>Top Deals</h1>
      <div className='userContainer'>
        {topDealUsers.map((eachUsers) => (
          <div className='listItem'>
            <div className='user'>
              <img src={eachUsers.img} alt='' className='userImage' />
              <div className='userLists'>
                <span className='userName'>{eachUsers.username}</span>
                <span className='userEmail'>{eachUsers.email}</span>
              </div>
            </div>
            <div className='amount'>${eachUsers.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
