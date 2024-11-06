// src/components/CartModal/CartModal.jsx

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/cartSlice';
import trashIcon from '../../images/lixeira.png';
import {
  Overlay,
  Sidebar,
  CartItems,
  CartItem,
  ItemInfo,
  ItemPrice,
  ItemButton,
  Total,
  ActionButton,
  DeliveryForm,
  PaymentForm,
  OrderConfirmation,
  Row,
  HalfWidthInput
} from './CartModal.style';

const CartModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [step, setStep] = useState("CART");
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
    orderId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const finalizarPedido = async () => {
    try {
      const response = await fetch('/api/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderData: formData, items: cart.items }),
      });
      const data = await response.json();
      setFormData({ ...formData, orderId: data.orderId }); // Salva o ID do pedido
      setStep("ORDER_CONFIRMED");
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
    }
  };

  const renderContent = () => {
    switch (step) {
      case "CART":
        return (
          <>
            <CartItems>
              {cart.items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <ItemInfo>
                    <h3>{item.name}</h3>
                    <ItemPrice>R$ {parseFloat(item.price.replace('R$', '').replace(',', '.')).toFixed(2)}</ItemPrice>
                    <ItemButton onClick={() => dispatch(removeItemFromCart(item.id))}>
                      <img src={trashIcon} alt="Remover" />
                    </ItemButton>
                  </ItemInfo>
                </CartItem>
              ))}
            </CartItems>
            <Total>
  <span>Valor total</span>
  <span>R$ {cart.totalAmount.toFixed(2)}</span> {/* Exibe o valor do total formatado */}
</Total>
            <ActionButton onClick={() => setStep("DELIVERY")}>Continuar com a entrega</ActionButton>
          </>
        );

      case "DELIVERY":
        return (
          <>
            <h2>Entrega</h2>
            <DeliveryForm>
              <label>Quem irá receber</label>
              <input name="recipient" value={formData.recipient} onChange={handleInputChange} required />

              <label>Endereço</label>
              <input name="address" value={formData.address} onChange={handleInputChange} required />

              <label>Cidade</label>
              <input name="city" value={formData.city} onChange={handleInputChange} required />

              {/* Alinhamento dos campos CEP e Número na mesma linha */}
              <Row>
                <div>
                  <label>CEP</label>
                  <HalfWidthInput name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                </div>
                <div>
                  <label>Número</label>
                  <HalfWidthInput name="number" value={formData.number} onChange={handleInputChange} required />
                </div>
              </Row>

              <label>Complemento (opcional)</label>
              <input name="complement" value={formData.complement} onChange={handleInputChange} />

              <ActionButton onClick={() => setStep("CART")}>Voltar para o carrinho</ActionButton>
              <ActionButton onClick={() => setStep("PAYMENT")}>Continuar com o pagamento</ActionButton>
            </DeliveryForm>
          </>
        );

        case "PAYMENT":
          return (
            <>
              <h2>Pagamento - Valor a pagar R$ {cart.totalAmount.toFixed(2)}</h2>
              <PaymentForm>
                <label>Nome do Cartão</label>
                <input name="cardName" value={formData.cardName} onChange={handleInputChange} required />
        
                <Row>
                  <div>
                    <label>Número do Cartão</label>
                    <HalfWidthInput name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label>CVV</label>
                    <HalfWidthInput name="cvv" value={formData.cvv} onChange={handleInputChange} required />
                  </div>
                </Row>
        
                <Row>
                  <div>
                    <label>Mês de vencimento</label>
                    <HalfWidthInput name="expiryMonth" value={formData.expiryMonth} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label>Ano de vencimento</label>
                    <HalfWidthInput name="expiryYear" value={formData.expiryYear} onChange={handleInputChange} required />
                  </div>
                </Row>
        
                <ActionButton onClick={() => setStep("DELIVERY")}>Voltar para edição de endereço</ActionButton>
                <ActionButton onClick={finalizarPedido}>Finalizar pagamento</ActionButton>
              </PaymentForm>
            </>
          );

      case "ORDER_CONFIRMED":
        return (
          <OrderConfirmation>
            <h2>Pedido realizado - {formData.orderId}</h2>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <ActionButton onClick={onClose}>Concluir</ActionButton>
          </OrderConfirmation>
        );

      default:
        return null;
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {renderContent()}
      </Sidebar>
    </Overlay>
  );
};

export default CartModal;
