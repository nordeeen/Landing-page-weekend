import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wknd-take-home-challenge-api.herokuapp.com',
});

const service = {
  getTestimonial: async () => {
    try {
      const response = await api.get('/testimonial');
      return response.data;
    } catch (err) {
      return err;
    }
  },
};

export default service;
