import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import BaseAdminto from "@Adminto/Base";
import CreateReactScript from "@Utils/CreateReactScript";
import Table from "../Components/Table";
import DxButton from "../Components/dx/DxButton";
import ReactAppend from "@Utils/ReactAppend";
import MessagesRest from "@Rest/Admin/MessagesRest";
import Modal from "@Adminto/Modal";
import Swal from "sweetalert2";

const messagesRest = new MessagesRest();

const Messages = () => {
    const gridRef = useRef();
    const modalRef = useRef();

    const [dataLoaded, setDataLoaded] = useState(null);

    const onDeleteClicked = async (id) => {
        const { isConfirmed } = await Swal.fire({
            title: "Eliminar mensaje",
            text: "¿Estas seguro de eliminar este mensaje?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        });
        if (!isConfirmed) return;
        const result = await messagesRest.delete(id);
        if (!result) return;
        $(gridRef.current).dxDataGrid("instance").refresh();
    };

    const onModalOpen = (data) => {
        if (!data.seen) {
            messagesRest.boolean({
                id: data,
                field: "seen",
                value: true,
            });
            $(gridRef.current).dxDataGrid("instance").refresh();
        }
        setDataLoaded(data);
        $(modalRef.current).modal("show");
    };

    return (
        <>
            <Table
                gridRef={gridRef}
                title="Mensajes"
                rest={messagesRest}
                toolBar={(container) => {
                    container.unshift({
                        widget: "dxButton",
                        location: "after",
                        options: {
                            icon: "refresh",
                            hint: "Refrescar tabla",
                            onClick: () =>
                                $(gridRef.current)
                                    .dxDataGrid("instance")
                                    .refresh(),
                        },
                    });
                }}
                exportable={true}
                exportableName="Mensajes"
                columns={[
                    {
                        dataField: "id",
                        caption: "ID",
                        visible: false,
                    },
                    {
                        dataField: "name",
                        caption: "Nombre",
                        cellTemplate: (container, { data }) => {
                            ReactAppend(
                                container,
                                <span
                                    style={{
                                        width: "100%",
                                        fontWeight: data.seen
                                            ? "lighter"
                                            : "bold",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => onModalOpen(data)}
                                >
                                    {data.name}
                                </span>,
                            );
                        },
                    },
                    {
                        dataField: "email",
                        caption: "Correo",
                    },
                    {
                        dataField: "phone",
                        caption: "Teléfono",
                    },
                    {
                        dataField: "modality",
                        caption: "Modalidad",
                        cellTemplate: (container, { data }) => {
                            if (data.modality) {
                                const isVirtual =
                                    data.modality.toLowerCase() === "virtual";
                                ReactAppend(
                                    container,
                                    <span
                                        className={`badge ${isVirtual ? "bg-info" : "bg-primary"} rounded-pill`}
                                    >
                                        {data.modality}
                                    </span>,
                                );
                            } else {
                                ReactAppend(
                                    container,
                                    <i className="text-muted">
                                        - Sin especificar -
                                    </i>,
                                );
                            }
                        },
                    },
                    {
                        dataField: "age",
                        caption: "Edad",
                        width: 80,
                        alignment: "center",
                    },
                    {
                        dataField: "service.title",
                        caption: "Servicio",
                        visible: false,
                        cellTemplate: (container, { data }) => {
                            ReactAppend(
                                container,
                                <span>
                                    {data.service?.title || (
                                        <i className="text-muted">
                                            - Consulta General -
                                        </i>
                                    )}
                                </span>,
                            );
                        },
                    },

                    {
                        dataField: "created_at",
                        caption: "Fecha",
                        dataType: "datetime",
                        format: "yyyy-MM-dd HH:mm:ss",
                        sortOrder: "desc",
                    },
                    {
                        dataField: "status",
                        caption: "Estado",
                        dataType: "boolean",
                        allowExporting: false,
                        cellTemplate: (container, { data }) => {
                            if (data.seen) {
                                ReactAppend(
                                    container,
                                    <span className="badge bg-success rounded-pill">
                                        Leído
                                    </span>,
                                );
                            } else {
                                ReactAppend(
                                    container,
                                    <span className="badge bg-danger rounded-pill">
                                        No leído
                                    </span>,
                                );
                            }
                        },
                    },
                    {
                        caption: "Acciones",
                        cellTemplate: (container, { data }) => {
                            container.append(
                                DxButton({
                                    className: "btn btn-xs btn-soft-dark",
                                    title: "Ver mensaje",
                                    icon: "fa fa-eye",
                                    onClick: () => onModalOpen(data),
                                }),
                            );
                            // container.append(DxButton({
                            //   className: 'btn btn-xs btn-light',
                            //   title: data.status === null ? 'Restaurar' : 'Cambiar estado',
                            //   icon: data.status === 1 ? 'fa fa-toggle-on text-success' : data.status === 0 ? 'fa fa-toggle-off text-danger' : 'fas fa-trash-restore',
                            //   onClick: () => onStatusChange(data)
                            // }))
                            container.append(
                                DxButton({
                                    className: "btn btn-xs btn-soft-danger",
                                    title: "Eliminar",
                                    icon: "fa fa-trash",
                                    onClick: () => onDeleteClicked(data.id),
                                }),
                            );
                        },
                        allowFiltering: false,
                        allowExporting: false,
                    },
                ]}
            />
            <Modal
                modalRef={modalRef}
                title="Detalle del Mensaje"
                hideFooter
                size="md"
            >
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="card bg-light border-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="avatar-md bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                                        <i className="fas fa-user fa-lg"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">
                                            {dataLoaded?.name}
                                        </h5>
                                        <small className="text-muted">
                                            {dataLoaded?.email || (
                                                <i>Sin correo</i>
                                            )}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="border rounded p-3 h-100">
                            <small className="text-muted d-block mb-1">
                                <i className="fas fa-phone me-1"></i> Teléfono
                            </small>
                            <span className="fw-semibold">
                                {dataLoaded?.phone || (
                                    <i className="text-muted">
                                        No especificado
                                    </i>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="border rounded p-3 h-100">
                            <small className="text-muted d-block mb-1">
                                <i className="fas fa-birthday-cake me-1"></i>{" "}
                                Edad
                            </small>
                            <span className="fw-semibold">
                                {dataLoaded?.age ? (
                                    `${dataLoaded.age} años`
                                ) : (
                                    <i className="text-muted">
                                        No especificado
                                    </i>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="border rounded p-3 h-100">
                            <small className="text-muted d-block mb-1">
                                <i className="fas fa-laptop me-1"></i> Modalidad
                            </small>
                            {dataLoaded?.modality ? (
                                <span
                                    className={`badge ${dataLoaded.modality.toLowerCase() === "virtual" ? "bg-info" : "bg-primary"}`}
                                >
                                    {dataLoaded.modality}
                                </span>
                            ) : (
                                <i className="text-muted">No especificado</i>
                            )}
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="border rounded p-3 h-100">
                            <small className="text-muted d-block mb-1">
                                <i className="fas fa-briefcase me-1"></i>{" "}
                                Servicio
                            </small>
                            <span className="fw-semibold">
                                {dataLoaded?.service?.title || (
                                    <i className="text-muted">
                                        Consulta General
                                    </i>
                                )}
                            </span>
                        </div>
                    </div>

                    {dataLoaded?.subject && (
                        <div className="col-12 mb-3">
                            <div className="border rounded p-3">
                                <small className="text-muted d-block mb-1">
                                    <i className="fas fa-tag me-1"></i> Asunto
                                </small>
                                <span className="fw-semibold">
                                    {dataLoaded?.subject}
                                </span>
                            </div>
                        </div>
                    )}

                    {dataLoaded?.description && (
                        <div className="col-12 mb-3">
                            <div className="border rounded p-3">
                                <small className="text-muted d-block mb-1">
                                    <i className="fas fa-comment me-1"></i>{" "}
                                    Mensaje
                                </small>
                                <p className="mb-0 mt-2">
                                    {dataLoaded?.description}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                <i className="fas fa-calendar me-1"></i>
                                {dataLoaded?.created_at
                                    ? new Date(
                                          dataLoaded.created_at,
                                      ).toLocaleString("es-PE")
                                    : ""}
                            </small>
                            {dataLoaded?.phone && (
                                <a
                                    href={`https://wa.me/51${dataLoaded.phone.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success btn-sm"
                                >
                                    <i className="fab fa-whatsapp me-1"></i>{" "}
                                    Contactar por WhatsApp
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

CreateReactScript((el, properties) => {
    createRoot(el).render(
        <BaseAdminto {...properties} title="Mensajes">
            <Messages {...properties} />
        </BaseAdminto>,
    );
});
