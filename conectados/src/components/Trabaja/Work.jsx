import React, { useState } from 'react';
import axios from '../../api/axios';
import { Col, Container, Row } from 'react-bootstrap';
import { alertCustom } from '../../utils/alertCustom';

const Work = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    service: '',
    description: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.imageUrl) {
      formErrors.imageUrl = 'Image URL is required';
    }
    if (!formData.service) {
      formErrors.service = 'Service is required';
    }
    if (!formData.description) {
      formErrors.description = 'Description is required';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('/work/create', formData);
      alertCustom('Success', 'Form submitted successfully', 'success', () => {
        setFormData({
          imageUrl: '',
          service: '',
          description: ''
        });
        setErrors({});
      });
      console.log(response.data);
    } catch (error) {
      alertCustom('Error', 'There was an error submitting the form', 'error');
      console.error('There was an error!', error);
    }
  };

  return (
    <Container fluid className='d-flex justify-content-center align-items-center vh-100'>
      <Row className=" w-100 justify-content-center ">
        <Col md={6} lg={4}>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
                required
              />
              {errors.imageUrl && <div className="invalid-feedback">{errors.imageUrl}</div>}
            </div>
            <div className="form-group">
              <label>Service:</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`form-control ${errors.service ? 'is-invalid' : ''}`}
                required
              >
                <option value="">Select a service</option>
                <option value="electricista">Electricista</option>
                <option value="plomeria">Plomería</option>
                <option value="pintureria">Pinturería</option>
              </select>
              {errors.service && <div className="invalid-feedback">{errors.service}</div>}
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                required
              />
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
