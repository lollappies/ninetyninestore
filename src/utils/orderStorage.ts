export interface SavedOrder {
  id: string;
  orderNumber: string;
  orderDate: string;
  status: 'selesai' | 'dikirim' | 'dibatalkan' | 'dikembalikan';
  total: number;
  cartItems: any[];
  shippingMethod: string;
  paymentMethod: string;
  customerInfo: any;
}

const STORAGE_KEY = 'ninetynine_orders';

export const getOrders = (): SavedOrder[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading orders from localStorage', error);
    return [];
  }
};

export const saveOrder = (order: Omit<SavedOrder, 'id'>) => {
  const orders = getOrders();
  const newOrder: SavedOrder = {
    ...order,
    id: `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([newOrder, ...orders]));
  return newOrder;
};

export const getOrdersByStatus = (status: SavedOrder['status']) => {
  const orders = getOrders();
  return orders.filter((order) => order.status === status);
};

export const updateOrderStatus = (
orderId: string,
newStatus: SavedOrder['status']) =>
{
  const orders = getOrders();
  const updatedOrders = orders.map((order) =>
  order.id === orderId ? { ...order, status: newStatus } : order
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders));
};