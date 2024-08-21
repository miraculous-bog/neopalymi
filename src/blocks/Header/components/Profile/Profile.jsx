import React, {useState} from 'react';

import Modal from '../../../../components/Modal/Modal';
import Basket from '../../../../components/Basket/Basket';

import FakeData from '../../../../utils/fakeData';

import LoginImg from '../../../../icons/login.png';
import BasketImg from '../../../../icons/basket.png';

import styles from './profile.module.scss';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBasket = () => {
    setIsModalOpen(true);
  };

  const closeBasket = () => {
    setIsModalOpen(false);
  };

  const decreament = () => {
    console.log('decreament');
  };
  const increament = () => {
    console.log('increament');
  };
  const deleteItem = () => {
    console.log('deleteItem');
  };
  return (
    <div className={styles.profile}>
      <div className={styles.login}>
        <img className={styles.img} src={LoginImg} alt="login" />
        <p className={styles.name}>LogIn</p>
      </div>
      <div className={styles.basket}>
        <img onClick={openBasket} className={styles.img} src={BasketImg} alt="basket" />
        <div className={styles.number}>
          5
        </div>
        {isModalOpen && (
          <Modal name="Shopping Cart" component={<Basket data={FakeData} 
            onIncrease={increament}
            onDecrease={decreament}
            onRemove={deleteItem}/>
          } onClose={closeBasket} />
        )}
      </div>
    </div>
  );
};

export default Profile;