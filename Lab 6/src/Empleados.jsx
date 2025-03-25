import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
Modal,ModalHeader,ModalBody,ModalFooter,
} from "reactstrap";

const data = [
    { Employee_Name: "Jane Cooper", Email: "jane@accenture.com", ATC: "CDMX" , Level:"8", Role:"SCRUM Master",Project:"Microsoft",Status:"June 9th"},
    { Employee_Name: "Floyd Miles", Email: "floyd@accenture.com", ATC: "GDL" , Level:"7", Role:"QA Automation Test Lead",Project:"N/A",Status:"Staffed"},
    { Employee_Name: "Ronald Richards", Email: "ronald@accenture.com", ATC: "PUE" , Level:"6", Role:"Feature Lead",Project:"N/A",Status:"Staffed"},
    { Employee_Name: "Marvin Mckinney", Email: "marvin@accenture.com", ATC: "MTY" , Level:"3", Role:"Quality Engineering Manager",Project:"Tesla",Status:"2026"},
    { Employee_Name: "Jerome Bell", Email: "jerome@accenture.com", ATC: "QRO" , Level:"5", Role:"Sales Director",Project:"Google",Status:"July 12"},
    { Employee_Name: "Kathryn Murphy", Email: "kathryn@accenture.com", ATC: "CDMX" , Level:"10", Role:"Financial Analyst II",Project:"Microsoft",Status:"June 9th"},
    { Employee_Name: "Jacob Jones", Email: "jacob@accenture.com", ATC: "TIJ" , Level:"9", Role:"Custom Software Engineering Manager",Project:"Yahoo",Status:"2026"},
    { Employee_Name: "Kristin Watson", Email: "kristin@accenture.com", ATC: "MTY" , Level:"11", Role:"Packaged Aplication Developer",Project:"N/A",Status:"Staffed"},
    { Employee_Name: "Paul McCartney", Email: "paul@accenture.com", ATC: "UK" , Level:"12", Role:"CEO",Project:"Apple Records",Status:"Staffed"},
    { Employee_Name: "John Lennon", Email: "john@accenture.com", ATC: "NYC" , Level:"12", Role:"CEO",Project:"Apple Records",Status:"Staffed"},
    { Employee_Name: "Ringo Starr", Email: "ringo@accenture.com", ATC: "UK" , Level:"12", Role:"CEO ",Project:"Apple Records",Status:"Staffed"},
    { Employee_Name: "George Harrison", Email: "george@accenture.com", ATC: "UK" , Level:"12", Role:"CEO",Project:"Apple Records",Status:"Staffed"},

];

class Empleados extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            Employee_Name: "",
            Email: "",
            ATC:"",
            Level: "",
            Role:"",
            Project:"",
            Status:"",

        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].Employee_Name = dato.Employee_Name;
                arreglo[contador].Email = dato.Email;
                arreglo[contador].ATC = dato.ATC;
                arreglo[contador].Role = dato.Role;
                arreglo[contador].Project = dato.Project;
                arreglo[contador].Status = dato.Status;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
       
    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }};
    
    insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form,
            [e.target.name]: e.target.value,
            },
        });
    };

    render () {
        return (
        <>
        <Container>
            <br />
                <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
            <br />
            <br />
                <Table>
                    <thead>
                        <tr>
                            <th>Employee Name </th>
                            <th>Email</th>
                            <th>ATC</th>
                            <th>Level</th>
                            <th>Role</th>
                            <th>Project</th>
                            <th>Status</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((dato) => (
                            <tr key={dato.Employee_Name}>
                                <td>{dato.Employee_Name}</td>
                                <td>{dato.Email}</td>
                                <td>{dato.ATC}</td>
                                <td>{dato.Level}</td>
                                <td>{dato.Role}</td>
                                <td>{dato.Project}</td>
                                <td>{dato.Status}</td>
                                <td>
                                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Edit</Button>{" "}
                                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div><h3>Insert name</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Employee Name </label>
                        <input className="form-control" name="name" type="text" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label> Email </label>
                        <input className="form-control" name="emial" type="text" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>ATC </label>
                        <input className="form-control" name="atc" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Level </label>
                        <input className="form-control" name="level" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Role </label>
                        <input className="form-control" name="role" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Project </label>
                        <input className="form-control" name="project" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Status </label>
                        <input className="form-control" name="status" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.insertar()} >Insert </Button>
                    <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                    <div><h3>Edit Register</h3></div>
                </ModalHeader>
                <ModalBody>
                <FormGroup>
                        <label>Employee Name </label>
                        <input className="form-control" name="name" type="text" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label> Email </label>
                        <input className="form-control" name="emial" type="text" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>ATC </label>
                        <input className="form-control" name="atc" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Level </label>
                        <input className="form-control" name="level" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Role </label>
                        <input className="form-control" name="role" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Project </label>
                        <input className="form-control" name="project" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Status </label>
                        <input className="form-control" name="status" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => this.editar(this.state.form)} >
                    Edit</Button>
                    <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                    Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
    } 
}
export default Empleados
