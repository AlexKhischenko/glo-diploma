<div class="modal">
      <div class="modal__dialog">
        <button class="modal__close"></button>
        <h3 class="modal__title">Оставьте заявку и мы Вам перезвоним</h3>
        <form action="modalSend.php" method="POST" class="form modal__form">
          <div class="modal__input-group">
            <label for="modal-user-name" class="modal__label">Имя</label>
            <input type="text" name="modalUserName" maxlength="15" class="input modal__input input--light" id="modal-user-name" placeholder="Ваше имя:">
          </div>
          <div class="modal__input-group">
            <label for="modal-user-phone" class="modal__label">Телефон</label>
            <input type="tel" name="modalUserPhone" class="input modal__input input--light" id="modal-user-phone" placeholder="Ваш номер телефона:">
          </div>
          <div class="modal__input-group">
            <label for="modal-user-email" class="modal__label">Email</label>
            <input type="email" name="modalUserEmail" class="input modal__input input--light" id="modal-user-email" placeholder="Ваш email">
          </div>
          <div class="policy modal__policy">
            <input type="checkbox" name="modalCheckbox" id="modal-checkbox" class="policy__checkbox" checked>
            <label for="modal-checkbox" class="policy__label" id="modal-checkbox-label">Я соглашаюсь с обработкой данных</label>
          </div>
          <!-- /.policy -->
          <button class="modal__button">Отправить заявку</button>
        </form>
        <!-- /.form modal__form -->        
        <div class="modal__success-message success-message">
          <p class="success-message__text">Сообщение успешно отправлено!</p>
          <div class="success-message__callback">Мы перезвоним Вам в ближайшее время</div>
        </div>
        <!-- /.modal-success__dialog -->        
      </div>
      <!-- /.modal__dialog -->
    </div>
    <!-- /.modal -->