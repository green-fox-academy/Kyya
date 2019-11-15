/**
 * Created by aze on 2017.05.09..
 */

class Updoot {
  baseUrl = 'http://localhost:8080';

  init() {
      // Apply event listeners
      $('#server_change').on('submit', this.onServerChangeSubmit.bind(this));
      $('#doubling').on('click', this.onDoublingClick.bind(this));
      $('#greeter').on('click', this.onGreeterClick.bind(this));
      $('#dountil').on('click', this.onDoUntilClick.bind(this));
      $('#appenda').on('click', this.onAppendaClick.bind(this));
  }

  addAlert(path, type, info) {
      const id = path.split('/')[0];
      const [ulEl] = $(`#${id}_response`).append(`<div class="alert alert-${type}">${id} / ${info}</div>`);
      const alertEl = ulEl.querySelector('div:last-child');
      setTimeout(() => {
          $(alertEl).fadeOut();
      }, 5000);
  }

  onServerChangeSubmit(event) {
      event.preventDefault();
      this.baseUrl = $('#server_address').val();    
  }

  async request(method, path, requestData = {}, validatorFn) {
      const endpointName = path.substr(1, path.length);
      const requestParams = { ...requestData };


      // First check if the server sends and error response
      let responseData;
      try {
        responseData = await $.ajax(`${this.baseUrl}${path}`, {
            data: method === 'post' ? JSON.stringify(requestParams) : requestParams,
            method,
            contentType: 'application/json'
        });
      } catch (error) {
          // even the error response may be validated
          if (validatorFn && validatorFn(error.responseJSON || {}, error)) {
            return this.addAlert(`${endpointName}`, 'success', `correct error response - ${JSON.stringify(error)}`);
        } else {
            return this.addAlert(`${endpointName}`, 'danger', `unexpected error response - ${JSON.stringify(error)}`);                
        }
      }

      // validate the success response
      if (validatorFn && !validatorFn(responseData)) {
          return this.addAlert(`${endpointName}`, 'danger', `incorrect response - ${JSON.stringify(responseData)}`);
      } else {
          return this.addAlert(`${endpointName}`, 'success', `SUCCESS - ${JSON.stringify(responseData)}`);                
      }
  }

  async onDoublingClick() {
      // no error expected
      await this.request('get', '/doubling');

      // expected 200, with specific response
      await this.request('get', '/doubling', { input: 5 }, data => {
          console.info('Validating, received must be equal to 5, result must be 10');
          return 'received' in data && 'result' in data && data['received'] == 5 && data['result'] == 10;
      });
  }

  async onGreeterClick() {
      // expecting error with prompt to provide and error and title
      await this.request('get', '/greeter', {}, errorData => {
        return errorData.error === 'Please provide a name and a title!';
      });

      // expecting error with prompt to provide a title
      await this.request('get', '/greeter', { name: 'petike' }, errorData => {
        return errorData.error = 'Please provide a title!';
      });

      // expected success with specific response
      await this.request('get', '/greeter', { name: 'petike', title: 'student' }, data => {
        return data["welcome_message"] === "Oh, hi there petike, my dear student!";
      });
  }

  async onAppendaClick() {
      // expected error "without appendable" 
      await this.request('get', '/appenda', {}, (_, error) => {
        return error.status === 404;
      });

      // expected success with specific response
      await this.request('get', '/appenda/kuty', {}, data => {
          console.info('Validating, appended must be equal to kutya');
          return 'appended' in data && data['appended'] === 'kutya';
      });
  }

  async onDoUntilClick() {
      // expected success with specific response
      await this.request('post', '/dountil/sum', { until: 7 }, data => {
          console.info('Validating, result must be 28');
          return data['result'] === 28;
      });

      // expected success with specific response
      await this.request('post', '/dountil/factor', { until: 4 }, data => {
          console.info('Validating, result must be 24');
          return data['result'] === 24;
      });
  }
};

// Start handling
new Updoot().init();
