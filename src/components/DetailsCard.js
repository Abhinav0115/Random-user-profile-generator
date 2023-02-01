/* eslint-disable react/jsx-no-undef */
import React from "react";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const DetailsCard = ({ details }) => {
    return (
        <div>
            <Card>
                <CardBody className="text-center">
                    <img
                        src={details.picture?.large}
                        alt="profile"
                        height="150"
                        width="150"
                        className="rounded-circle img-thumbnail border-danger"
                    />
                    <CardTitle className="text-primary">
                        <h1>
                            <span>
                                {details.name?.title +
                                    " " +
                                    details.name?.first +
                                    details.name?.last}
                            </span>
                        </h1>
                    </CardTitle>
                    <CardText>
                        <FaMapMarkedAlt />
                        <span className="p-2">
                            {details.location?.city +
                                ", " +
                                details.location?.country}
                        </span>
                    </CardText>

                    <CardText>
                        <BsPersonFill />
                        <span className="p-2">{details.gender}</span>
                    </CardText>

                    <CardText>
                        <BsPersonFill />
                        <span className="p-2">
                            {details.dob?.age + " Year old"}
                        </span>
                    </CardText>

                    <CardText>
                        <FaEnvelope />
                        <span className="p-2">{details.email}</span>
                    </CardText>
                    <CardText>
                        <FaPhone />
                        <span className="p-2">{details.phone}</span>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DetailsCard;
