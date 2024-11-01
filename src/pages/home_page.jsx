import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>¡Aquí se encuentran los cursos a los cuales estás disponible para hacer ayudantía!</h2>
      <p>Una vez que elijas postular, si deseas revisar su estado o cancelarla deberá ir a Estado Postulaciones.</p>
      <p>Haga doble click para cambiar el tipo de ayudante que desea ser.</p>

      {/* Tabla de cursos */}
      <div className="table-container">
        <table className="courses-table">
          <thead>
            <tr>
              <th>Emplazamiento</th>
              <th>Asignatura</th>
              <th>Tipo de ayudante</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Horas</th>
              <th>Postulación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>San Joaquín</td>
              <td>INF-123</td>
              <td>Cátedra <span className="toggle-role">Laboratorio ➔</span></td>
              <td>Marzo</td>
              <td>Julio</td>
              <td>40</td>
              <td><button className="apply-button">➔</button></td>
            </tr>
            <tr>
              <td>Casa Central</td>
              <td>INF-102</td>
              <td>Cátedra <span className="toggle-role">Laboratorio</span></td>
              <td>Abril</td>
              <td>Julio</td>
              <td>40</td>
              <td><button className="apply-button">➔</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Recuerda que son cursos que debes haber pasado. Si deseas hacer ayudantías administrativas o de investigación, aquí abajo se presentan:</p>

      {/* Tabla de ayudantías administrativas o de investigación */}
      <div className="table-container">
        <table className="research-table">
          <thead>
            <tr>
              <th>Emplazamiento</th>
              <th>Tipo de ayudantía</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Horas</th>
              <th>Postulación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>San Joaquín</td>
              <td>Investigador</td>
              <td>Marzo</td>
              <td>Julio</td>
              <td>40</td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Casa Central</td>
              <td>Ayudante de informática</td>
              <td>Abril</td>
              <td>Julio</td>
              <td>40</td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;