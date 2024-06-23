import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import { alertCustom } from '../utils/alertCustom';

export const ServiceContext = createContext();

export const useServices = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error("useServices must be used within a ServiceProvider");
    }
    return context;
};

export const ServiceProvider = ({ children }) => {
    const [errors, setErrors] = useState("");
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const createService = async (service) => {
        try {
            const res = await axios.post('/services/create', service);
            if (res.status === 200 || res.status === 201) {
                alertCustom('Éxito', 'Servicio creado exitosamente', 'success');
                setServices(prevServices => [...prevServices, res.data]);
            } else {
                alertCustom('Upps', 'El servicio se creó, pero se recibió un código de estado inesperado.', 'warning');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Ha ocurrido un error al crear el servicio.';
            alertCustom('Upps', errorMessage, 'error');
        }
    };

    const getAllServices = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/services/getAll');
            setServices(res.data);
        } catch (error) {
            setErrors(
                error.response?.data?.message ||
                alertCustom("Upps", "Ha ocurrido un error al traer los servicios.", "error")
            );
        } finally {
            setLoading(false);
        }
    };

    const deleteService = async (id) => {
        try {
            await axios.delete(`/services/delete/${id}`);
            setServices(prevServices => prevServices.filter(service => service._id !== id));
            alertCustom('Éxito', 'Servicio eliminado correctamente', 'success');
        } catch (error) {
            alertCustom('Error', 'Ha ocurrido un error al eliminar el servicio', 'error');
        }
    };

    const editService = async (id, updatedService) => {
        try {
            const res = await axios.patch(`/services/edit/${id}`, updatedService);
            setServices(prevServices => prevServices.map(service => (service._id === id ? res.data : service)));
            alertCustom('Éxito', 'Servicio editado exitosamente', 'success');
        } catch (error) {
            alertCustom('Error', 'Ha ocurrido un error al editar el servicio', 'error');
        }
    };

    useEffect(() => {
        getAllServices();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrors("");
        }, 3500);
        return () => clearTimeout(timer);
    }, [errors]);

    return (
        <ServiceContext.Provider
            value={{
                createService,
                getAllServices,
                deleteService,
                editService,
                services,
                errors,
                loading
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};
