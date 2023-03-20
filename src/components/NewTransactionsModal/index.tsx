import { ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from "./styles";

export function NewTransactionModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content >
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Categoria" required />
          <TransactionTypeContainer>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome">
              <ArrowCircleUp size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionTypeContainer>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}