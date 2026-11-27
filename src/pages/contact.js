import { PRODUCTS, SERVICES } from '../data.js';
import {
  ICON_CHECK_CIRCLE,
  ICON_CLOCK,
  ICON_MAIL,
  ICON_MAP_PIN,
  ICON_PHONE,
} from '../icons.js';
import { escapeHtml, renderImage } from '../utils.js';

function getInitialInquiryType(preselectedSubject) {
  if (!preselectedSubject) return 'Consultoría e Ingeniería Hidráulica';
  if (preselectedSubject.startsWith('Cotización de producto:')) {
    return 'Cotización de Productos y Equipos';
  }
  return 'Consultoría e Ingeniería Hidráulica';
}

function renderInquiryForm(state) {
  if (state.submitted) {
    return `
      <div role="status" aria-live="polite" class="success-box">
        <div class="success-row">
          <div class="success-icon">${ICON_CHECK_CIRCLE}</div>
          <div>
            <h3 class="success-title">Solicitud registrada correctamente</h3>
            <p class="success-msg">
              Gracias, <strong style="color:var(--ica-ink);font-weight:500;">${escapeHtml(state.name)}</strong>.
              Hemos recibido su solicitud sobre
              <strong style="color:var(--ica-blue);font-weight:500;">${escapeHtml(state.inquiryType)}</strong>
              y responderemos a
              <strong style="color:var(--ica-ink);font-weight:500;">${escapeHtml(state.email)}</strong>
              en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
        <button type="button" id="contact-reset-btn" class="btn-reset">
          Enviar otra consulta
        </button>
      </div>
    `;
  }

  const serviceOptions = SERVICES.map(
    (item) =>
      `<option value="${escapeHtml(item.title)}"${
        state.inquiryType === item.title ? ' selected' : ''
      }>Servicio: ${escapeHtml(item.title)}</option>`
  ).join('');

  const productOptions = PRODUCTS.map(
    (item) =>
      `<option value="${escapeHtml(item.name)}"${
        state.inquiryType === item.name ? ' selected' : ''
      }>Producto: ${escapeHtml(item.name)}</option>`
  ).join('');

  return `
    <form id="contact-form" novalidate class="contact-form">
      <div class="form-row-2">
        <div>
          <label for="contact-name" class="form-label">
            Nombre y apellido <span class="req-star">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value="${escapeHtml(state.name)}"
            placeholder="Ej. Ing. Carlos Mendoza"
            class="form-control${state.errors.name ? ' has-error' : ''}"
          />
          ${state.errors.name ? `<p class="field-error">${escapeHtml(state.errors.name)}</p>` : ''}
        </div>

        <div>
          <label for="contact-org" class="form-label">Empresa o entidad</label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value="${escapeHtml(state.organization)}"
            placeholder="Municipalidad, constructora o industria"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-row-2">
        <div>
          <label for="contact-email" class="form-label">
            Correo electrónico <span class="req-star">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value="${escapeHtml(state.email)}"
            placeholder="nombre@empresa.com"
            class="form-control${state.errors.email ? ' has-error' : ''}"
          />
          ${state.errors.email ? `<p class="field-error">${escapeHtml(state.errors.email)}</p>` : ''}
        </div>

        <div>
          <label for="contact-phone" class="form-label">Teléfono de contacto</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value="${escapeHtml(state.phone)}"
            placeholder="+51 999 000 000"
            class="form-control"
          />
        </div>
      </div>

      <div>
        <label for="contact-type" class="form-label">
          Área o motivo de consulta <span class="req-star">*</span>
        </label>
        <select
          id="contact-type"
          name="inquiryType"
          class="form-control${state.errors.inquiryType ? ' has-error' : ''}"
        >
          <option value="Consultoría e Ingeniería Hidráulica"${
            state.inquiryType === 'Consultoría e Ingeniería Hidráulica' ? ' selected' : ''
          }>
            Consultoría e Ingeniería Hidráulica
          </option>
          <option value="Cotización de Productos y Equipos"${
            state.inquiryType === 'Cotización de Productos y Equipos' ? ' selected' : ''
          }>
            Cotización de Productos y Equipos
          </option>
          ${serviceOptions}
          ${productOptions}
        </select>
        ${
          state.errors.inquiryType
            ? `<p class="field-error">${escapeHtml(state.errors.inquiryType)}</p>`
            : ''
        }
      </div>

      <div>
        <label for="contact-message" class="form-label">
          Descripción y parámetros del proyecto <span class="req-star">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Indique ubicación, caudal aproximado, equipo de interés o alcance requerido."
          class="form-control${state.errors.message ? ' has-error' : ''}"
        >${escapeHtml(state.message)}</textarea>
        ${
          state.errors.message
            ? `<p class="field-error">${escapeHtml(state.errors.message)}</p>`
            : ''
        }
      </div>

      <div class="form-footer-row">
        <span class="form-required-note">
          Los campos marcados con <span class="req-star">*</span> son obligatorios.
        </span>
        <button type="submit" class="btn-primary-blue">
          Enviar Solicitud Técnica
        </button>
      </div>
    </form>
  `;
}

export function renderContactPage(preselectedSubject = '') {
  const initialState = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: getInitialInquiryType(preselectedSubject),
    message: preselectedSubject ? `${preselectedSubject}. ` : '',
    errors: {},
    submitted: false,
  };

  return `
    <div>
      <!-- Page Intro -->
      <section class="page-hero">
        <div class="cover-backdrop">
          ${renderImage({
            src: '/src/assets/images/contact_engineering_cover_1795737173146.jpg',
            alt: 'Centro de ingeniería hidráulica junto a embalse y obras de captación de agua',
            fallbackLabel: 'Contacto Técnico y Comercial',
            className: 'cover-img',
          })}
          <div aria-hidden="true" class="page-hero-scrim"></div>
        </div>

        <div class="container page-hero-content">
          <div class="reveal-hero">
            <p class="page-hero-eyebrow">Contacto Técnico y Comercial</p>
            <h1 class="page-hero-title page-hero-title--contact text-balance">
              Converse con nuestro equipo de ingeniería
            </h1>
            <p class="page-hero-subtitle page-hero-subtitle--contact">
              Atendemos consultas sobre estudios hidrológicos, diseño de obras, cotización de equipos
              y supervisión técnica con respuesta inicial en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact layout -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <!-- Left column: Direct contact info -->
            <div class="contact-left">
              <div class="contact-card reveal">
                <h2 class="contact-card-title">Canales Directos</h2>

                <div class="contact-channels">
                  <div class="channel-row">
                    <div class="channel-icon">${ICON_MAIL}</div>
                    <div>
                      <div class="channel-label">Correos Electrónicos</div>
                      <div class="email-groups">
                        <div>
                          <span class="email-dept">Administración</span>
                          <a href="mailto:administracion@ica-hidraulica.com" class="email-link">
                            administracion@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span class="email-dept">Ventas</span>
                          <a href="mailto:ventas@ica-hidraulica.com" class="email-link">
                            ventas@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span class="email-dept">Ingeniería</span>
                          <a href="mailto:ingenieria@ica-hidraulica.com" class="email-link">
                            ingenieria@ica-hidraulica.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICON_PHONE}</div>
                    <div>
                      <div class="channel-label">Central Telefónica</div>
                      <div class="channel-value font-mono">+51 (01) 482 3900</div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICON_MAP_PIN}</div>
                    <div>
                      <div class="channel-label">Oficina Central</div>
                      <div class="channel-value">
                        Av. República de Panamá 3418, Of. 602, San Isidro
                      </div>
                    </div>
                  </div>

                  <div class="channel-row">
                    <div class="channel-icon">${ICON_CLOCK}</div>
                    <div>
                      <div class="channel-label">Horario de Atención</div>
                      <div class="channel-value">Lunes a Viernes · 08:30 a 18:00 hrs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="invite-card reveal" style="--reveal-delay: 140ms;">
                <h3 class="invite-title">¿Tiene un proyecto en mente?</h3>
                <p class="invite-copy">
                  Nuestro equipo técnico y comercial está listo para asesorarlo. Escríbanos o envíe
                  el formulario y le responderemos a la brevedad.
                </p>
              </div>
            </div>

            <!-- Right column: Full Inquiry Form -->
            <div class="form-card reveal" style="--reveal-delay: 180ms;">
              <div class="form-header">
                <p class="form-eyebrow">Formulario de Solicitud</p>
                <h2 class="form-title">Envíenos los detalles de su requerimiento</h2>
              </div>

              <div id="contact-form-container">
                ${renderInquiryForm(initialState)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initContactPage(rootEl, preselectedSubject = '') {
  const formContainer = rootEl.querySelector('#contact-form-container');
  if (!formContainer) return () => {};

  const state = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: getInitialInquiryType(preselectedSubject),
    message: preselectedSubject ? `${preselectedSubject}. ` : '',
    errors: {},
    submitted: false,
  };

  const validate = () => {
    const nextErrors = {};
    if (!state.name.trim() || state.name.trim().length < 2) {
      nextErrors.name = 'Ingrese su nombre completo.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email.trim() || !emailPattern.test(state.email.trim())) {
      nextErrors.email = 'Ingrese un correo electrónico válido.';
    }
    if (!state.inquiryType.trim()) {
      nextErrors.inquiryType = 'Seleccione el tipo de requerimiento.';
    }
    if (!state.message.trim() || state.message.trim().length < 10) {
      nextErrors.message =
        'Describa brevemente el alcance o requerimiento (mínimo 10 caracteres).';
    }
    return nextErrors;
  };

  const syncInputsFromDom = () => {
    const form = formContainer.querySelector('#contact-form');
    if (!form) return;
    const data = new FormData(form);
    state.name = String(data.get('name') || '');
    state.organization = String(data.get('organization') || '');
    state.email = String(data.get('email') || '');
    state.phone = String(data.get('phone') || '');
    state.inquiryType = String(data.get('inquiryType') || 'Consultoría e Ingeniería Hidráulica');
    state.message = String(data.get('message') || '');
  };

  const renderFormView = () => {
    formContainer.innerHTML = renderInquiryForm(state);
    bindFormEvents();
  };

  const bindFormEvents = () => {
    const form = formContainer.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        syncInputsFromDom();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
          state.errors = errors;
          renderFormView();
          return;
        }
        state.errors = {};
        state.submitted = true;
        renderFormView();
      });
    }

    const resetBtn = formContainer.querySelector('#contact-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.name = '';
        state.organization = '';
        state.email = '';
        state.phone = '';
        state.message = '';
        state.errors = {};
        state.submitted = false;
        renderFormView();
      });
    }
  };

  bindFormEvents();
  return () => {};
}
