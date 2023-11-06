import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from '../userSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { useEffect } from 'react';

export default function UserOrders() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);
    const orders = useSelector(selectUserOrdersd);

useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id));
}, [dispatch, user.id]);

  return (
    <div>
      <div>

      </div>
    </div>
  );
}
