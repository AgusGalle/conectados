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

    const createService = async (service) => {
        try {
            const res = await axios.post('/services/create', service);
            if (res.status === 200 || res.status === 201) {
                alertCustom('Éxito', 'Servicio creado exitosamente', 'success');
            } else {
                alertCustom('Upps', 'El servicio se creó, pero se recibió un código de estado inesperado.', 'warning');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Ha ocurrido un error al crear el servicio.';
            alertCustom('Upps', errorMessage, 'error');
        }
    };

    const getAllServices = async () => {
        try {
            const res = await axios.get('/services/getAll');
            setServices(res.data);
        } catch (error) {
            setErrors(
                error.response?.data?.message ||
                alertCustom("Upps", "Ha ocurrido un error al traer los servicios.", "error")
            );
        }
    };

    const deleteService = async (id) => {
        try {
            await axios.delete(`/services/delete/${id}`);
        } catch (error) {
            alertCustom('Error', 'Ha ocurrido un error al eliminar el servicio', 'error');
        }
    };

    const editService = async (id, updatedService) => {
        try {
            await axios.patch(`/services/edit/${id}`, updatedService);
        } catch (error) {
            alertCustom('Error', 'Ha ocurrido un error al editar el servicio', 'error');
        }
    };

    const getById = async (id) => {
        try {
            const res = await axios.get(`/services/getById/${id}`);
            return res.data;
        } catch (error) {
            throw new Error("Error al obtener el servicio por ID");
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
                getById,
                services,
                errors,
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};
