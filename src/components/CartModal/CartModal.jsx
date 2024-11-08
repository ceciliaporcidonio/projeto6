// src/components/CartModal/CartModal.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate
import { removeItemFromCart, clearCart } from '../../store/cartSlice';
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
  PrimaryActionButton,
  SecondaryActionButton,
  DeliveryForm,
  PaymentForm,
  OrderConfirmation,
  Row,
  HalfWidthInput,
  TitleContainer,
  SmallInput,
  MediumInput,
  LargeInput,
} from './CartModal.style';

const CartModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicializar o navigate
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de submissão
    finalizarPedido(); // Chama a função de finalização de pedido
  };
  

  const finalizarPedido = async () => {
    try {
      const products = cart.items.map((item) => ({
        id: item.id,
        price: parseFloat(item.price.replace('R$', '').replace(',', '.'))
      }));

      const body = {
        products: products,
        delivery: {
          receiver: formData.recipient,
          address: {
            description: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
            number: parseInt(formData.number, 10),
            complement: formData.complement || ""
          }
        },
        payment: {
          card: {
            name: formData.cardName,
            number: formData.cardNumber,
            code: parseInt(formData.cvv, 10),
            expires: {
              month: parseInt(formData.expiryMonth, 10),
              year: parseInt(formData.expiryYear, 10)
            }
          }
        }
      };

      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro da API:', errorData);
        throw new Error(`Erro na resposta da API: ${response.status} - ${errorData.message || 'Detalhes desconhecidos'}`);
      }

      const data = await response.json();
      console.log("Resposta da API:", data);

      if (data.orderId) {
        setFormData({ ...formData, orderId: data.orderId });
        setStep("ORDER_CONFIRMED"); // Muda para a tela de pedido confirmado

        // Limpar o carrinho
        dispatch(clearCart());  // Despacha a ação para limpar o carrinho
      } else {
        console.warn("orderId não encontrado na resposta da API");
      }
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
    }
  };
  

  const renderCart = () => (
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
        <span>R$ {cart.totalAmount.toFixed(2)}</span>
      </Total>
      <PrimaryActionButton onClick={() => setStep("DELIVERY")}>Continuar com a entrega</PrimaryActionButton>
    </>
  );

  const renderDeliveryForm = () => {
    const handleDeliverySubmit = (e) => {
      e.preventDefault();
  
      // Validação simples
      if (!formData.recipient || !formData.address || !formData.city || !formData.zipCode || !formData.number) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      setStep("PAYMENT");
    };
  
    return (
      <DeliveryForm onSubmit={handleDeliverySubmit}>
        <TitleContainer>Entrega</TitleContainer>
        <label>Quem vai receber</label>
        <LargeInput name="recipient" value={formData.recipient} onChange={handleInputChange} required />
  
        <label>Endereço</label>
        <LargeInput name="address" value={formData.address} onChange={handleInputChange} required />
  
        <label>Cidade</label>
        <LargeInput name="city" value={formData.city} onChange={handleInputChange} required />
  
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
  
        <Row>
          <div>
            <label>Complemento (opcional)</label>
            <LargeInput name="complement" value={formData.complement} onChange={handleInputChange} />
          </div>
        </Row>
  
        <SecondaryActionButton type="submit">Continuar para o pagamento</SecondaryActionButton>
        <SecondaryActionButton onClick={() => setStep("CART")}>Voltar para o carrinho</SecondaryActionButton>
      </DeliveryForm>
    );
  };
  
  const renderPaymentForm = () => {
    const handlePaymentSubmit = (e) => {
      e.preventDefault();
  
      // Validação dos campos de pagamento
      if (!formData.cardName || !formData.cardNumber || !formData.cvv || !formData.expiryMonth || !formData.expiryYear) {
        alert("Por favor, preencha todos os campos obrigatórios de pagamento.");
        return;
      }
  
      handleSubmit(e); // Finaliza o pedido
    };
  
    return (
      <PaymentForm onSubmit={handlePaymentSubmit}>
        <TitleContainer>Pagamento - Valor total a pagar R$ {cart.totalAmount.toFixed(2)}</TitleContainer>
        <label>Nome do Cartão</label>
        <LargeInput name="cardName" value={formData.cardName} onChange={handleInputChange} required />
  
        <Row>
          <div>
            <label>Número do Cartão</label>
            <MediumInput name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
          </div>
          <div>
            <label>CVV</label>
            <SmallInput name="cvv" value={formData.cvv} onChange={handleInputChange} required />
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
        <SecondaryActionButton type="submit">Finalizar Pedido</SecondaryActionButton>
        <SecondaryActionButton onClick={() => setStep("DELIVERY")}>Voltar para edição de endereço</SecondaryActionButton>
      </PaymentForm>
    );
  };
  
  const renderOrderConfirmation = () => (
    <OrderConfirmation>
       <TitleContainer>Pedido realizado - {formData.orderId}</TitleContainer>
      <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
      <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
      <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      <SecondaryActionButton onClick={() => navigate('/')}>Concluir</SecondaryActionButton>
    </OrderConfirmation>
  );

  const renderContent = () => {
    console.log("Estado atual do step:", step); // Log de depuração
    switch (step) {
      case "CART":
        return renderCart();
      case "DELIVERY":
        return renderDeliveryForm();
      case "PAYMENT":
        return renderPaymentForm();
      case "ORDER_CONFIRMED":
        return renderOrderConfirmation();
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
