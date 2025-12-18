import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import Gradient from "@/components/Gradient.tsx";

const Estadisticas = () => {
  // Datos de género
  const datosGenero = [
    { response: "Hombre", count: 340, percentage: 77.27, color: "#FF6B9D" },
    { response: "Mujer", count: 95, percentage: 21.59, color: "#C44569" },
    { response: "No binario", count: 3, percentage: 0.68, color: "#F8B500" },
    { response: "Prefiero no decir", count: 2, percentage: 0.45, color: "#4ECDC4" },
  ];

  // Datos de edad
  const datosEdad = [
    { age_range: "< 17", count: 3, percentage: 0.68, color: "#FF6B9D" },
    { age_range: "18-24", count: 174, percentage: 39.55, color: "#C44569" },
    { age_range: "25-34", count: 162, percentage: 36.82, color: "#F8B500" },
    { age_range: "35-44", count: 73, percentage: 16.59, color: "#4ECDC4" },
    { age_range: "45-54", count: 25, percentage: 5.68, color: "#95E1D3" },
    { age_range: "> 55", count: 2, percentage: 0.45, color: "#FFA07A" },
    { age_range: "prefiero no decir", count: 1, percentage: 0.23, color: "#98D8C8" },
  ];

  // Datos de experiencia
  const datosExperiencia = [
    { experience_years: "1 - 3", count: 226, percentage: 51.36, color: "#FF6B9D" },
    { experience_years: "4 - 6", count: 81, percentage: 18.41, color: "#C44569" },
    { experience_years: "> 7", count: 133, percentage: 30.23, color: "#F8B500" },
  ];

  // Datos de especialidades
  const datosEspecialidades = [
    { specialty_group: "Backend Developer", count: 95, percentage: 21.59, color: "#FF6B9D" },
    { specialty_group: "Full Stack Developer", count: 83, percentage: 18.86, color: "#C44569" },
    { specialty_group: "Software Developer (General)", count: 28, percentage: 6.36, color: "#F8B500" },
    { specialty_group: "Frontend Developer", count: 27, percentage: 6.14, color: "#4ECDC4" },
    { specialty_group: "DevOps/SRE", count: 25, percentage: 5.68, color: "#95E1D3" },
    { specialty_group: "QA/Testing", count: 21, percentage: 4.77, color: "#FFA07A" },
    { specialty_group: "Mobile Developer", count: 16, percentage: 3.64, color: "#98D8C8" },
    { specialty_group: "Programming Languages", count: 15, percentage: 3.41, color: "#FFD700" },
    { specialty_group: "UX/UI Design", count: 14, percentage: 3.18, color: "#87CEEB" },
    { specialty_group: "Data Science/Analytics", count: 12, percentage: 2.73, color: "#DDA0DD" },
    { specialty_group: "Student", count: 11, percentage: 2.50, color: "#F0E68C" },
    { specialty_group: "AI/Machine Learning", count: 9, percentage: 2.05, color: "#20B2AA" },
    { specialty_group: "Project Management", count: 8, percentage: 1.82, color: "#FF6347" },
    { specialty_group: "Software Engineer", count: 7, percentage: 1.59, color: "#4682B4" },
    { specialty_group: "No Specialty/Other", count: 6, percentage: 1.36, color: "#32CD32" },
    { specialty_group: "Cloud/Infrastructure", count: 4, percentage: 0.91, color: "#FF1493" },
    { specialty_group: "Cybersecurity", count: 4, percentage: 0.91, color: "#00CED1" },
    { specialty_group: "Fotografo", count: 2, percentage: 0.45, color: "#FF8C00" },
    { specialty_group: "Software Architect", count: 2, percentage: 0.45, color: "#9370DB" },
    { specialty_group: "Tech Recruiting", count: 2, percentage: 0.45, color: "#3CB371" },
  ];

  // Datos de tecnologías
  const datosTecnologias = [
    { technology_name: "JavaScript", mention_count: 56, unique_attendees: 56, percentage_of_mentions: 18.54, color: "#FF6B9D" },
    { technology_name: "Java", mention_count: 49, unique_attendees: 49, percentage_of_mentions: 16.23, color: "#C44569" },
    { technology_name: "Python", mention_count: 43, unique_attendees: 43, percentage_of_mentions: 14.24, color: "#F8B500" },
    { technology_name: "Node.js", mention_count: 32, unique_attendees: 32, percentage_of_mentions: 10.60, color: "#4ECDC4" },
    { technology_name: "React", mention_count: 16, unique_attendees: 16, percentage_of_mentions: 5.30, color: "#95E1D3" },
    { technology_name: "C#", mention_count: 12, unique_attendees: 12, percentage_of_mentions: 3.97, color: "#FFA07A" },
    { technology_name: "C++", mention_count: 10, unique_attendees: 10, percentage_of_mentions: 3.31, color: "#98D8C8" },
    { technology_name: "PHP", mention_count: 10, unique_attendees: 10, percentage_of_mentions: 3.31, color: "#FFD700" },
    { technology_name: "TypeScript", mention_count: 8, unique_attendees: 8, percentage_of_mentions: 2.65, color: "#87CEEB" },
    { technology_name: "Android", mention_count: 7, unique_attendees: 7, percentage_of_mentions: 2.32, color: "#DDA0DD" },
    { technology_name: "React Native", mention_count: 7, unique_attendees: 7, percentage_of_mentions: 2.32, color: "#F0E68C" },
    { technology_name: "Angular", mention_count: 6, unique_attendees: 6, percentage_of_mentions: 1.99, color: "#20B2AA" },
    { technology_name: "C", mention_count: 6, unique_attendees: 6, percentage_of_mentions: 1.99, color: "#FF6347" },
    { technology_name: "Linux", mention_count: 6, unique_attendees: 6, percentage_of_mentions: 1.99, color: "#4682B4" },
    { technology_name: "HTML/CSS", mention_count: 5, unique_attendees: 5, percentage_of_mentions: 1.66, color: "#32CD32" },
    { technology_name: "iOS", mention_count: 5, unique_attendees: 5, percentage_of_mentions: 1.66, color: "#FF1493" },
    { technology_name: "SQL/SQL Server", mention_count: 4, unique_attendees: 4, percentage_of_mentions: 1.32, color: "#00CED1" },
    { technology_name: "AWS", mention_count: 3, unique_attendees: 3, percentage_of_mentions: 0.99, color: "#FF8C00" },
    { technology_name: "Go", mention_count: 3, unique_attendees: 3, percentage_of_mentions: 0.99, color: "#9370DB" },
    { technology_name: "MongoDB", mention_count: 3, unique_attendees: 3, percentage_of_mentions: 0.99, color: "#3CB371" },
    { technology_name: "Kotlin", mention_count: 2, unique_attendees: 2, percentage_of_mentions: 0.66, color: "#8B4513" },
    { technology_name: "Ruby", mention_count: 2, unique_attendees: 2, percentage_of_mentions: 0.66, color: "#CD5C5C" },
    { technology_name: "Azure", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#4169E1" },
    { technology_name: "Mulesoft", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#FF69B4" },
    { technology_name: "PostgreSQL", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#00FA9A" },
    { technology_name: "Rust", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#FFD700" },
    { technology_name: "Salesforce", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#00BFFF" },
    { technology_name: "SAP", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#FF6347" },
    { technology_name: "Spring", mention_count: 1, unique_attendees: 1, percentage_of_mentions: 0.33, color: "#9370DB" },
  ];

  const chartConfig = {
    count: {
      label: "Cantidad",
      color: "#FF6B9D",
    },
    percentage: {
      label: "Porcentaje",
      color: "#C44569",
    },
  };

  // Formatear el tooltip para mostrar count y percentage
  const customTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const label = data.response || data.age_range;
      return (
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-3 shadow-xl">
          <p className="text-white font-semibold mb-2">{label}</p>
          <p className="text-white text-sm">Cantidad: {data.count}</p>
          <p className="text-white text-sm">Porcentaje: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Tooltip específico para edad
  const customTooltipEdad = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-3 shadow-xl">
          <p className="text-white font-semibold mb-2">{data.age_range}</p>
          <p className="text-white text-sm">Cantidad: {data.count}</p>
          <p className="text-white text-sm">Porcentaje: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Tooltip específico para experiencia
  const customTooltipExperiencia = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-3 shadow-xl">
          <p className="text-white font-semibold mb-2">{data.experience_years} años</p>
          <p className="text-white text-sm">Cantidad: {data.count}</p>
          <p className="text-white text-sm">Porcentaje: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Tooltip específico para especialidades
  const customTooltipEspecialidades = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-3 shadow-xl">
          <p className="text-white font-semibold mb-2">{data.specialty_group}</p>
          <p className="text-white text-sm">Cantidad: {data.count}</p>
          <p className="text-white text-sm">Porcentaje: {data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  // Tooltip específico para tecnologías
  const customTooltipTecnologias = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/20 p-3 shadow-xl">
          <p className="text-white font-semibold mb-2">{data.technology_name}</p>
          <p className="text-white text-sm">Menciones: {data.mention_count}</p>
          <p className="text-white text-sm">Asistentes únicos: {data.unique_attendees}</p>
          <p className="text-white text-sm">Porcentaje: {data.percentage_of_mentions}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Gradient className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Numeralia Posadev 2025
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfica de Pastel */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-black text-center border-b border-white/20 pb-3">
              Identidad de Género
            </h2>
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <PieChart>
                  <Pie
                    data={datosGenero}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ response, percentage }) => `${response}: ${percentage}%`}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {datosGenero.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={customTooltip} />
                </PieChart>
              </ChartContainer>
            </div>
          </div>

          {/* Gráfica de Barras */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">
              Cantidad por Género
            </h2>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <BarChart data={datosGenero} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  type="number"
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                />
                <YAxis 
                  type="category"
                  dataKey="response"
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                  width={120}
                />
                <ChartTooltip content={customTooltip} />
                <Bar 
                  dataKey="count" 
                  fill="#FF6B9D" 
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Sección de Distribución por Edad */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfica de Pastel - Edad */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-black text-center border-b border-white/20 pb-3">
              Distribución por Edad
            </h2>
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <PieChart>
                  <Pie
                    data={datosEdad}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ age_range, percentage }) => `${age_range}: ${percentage}%`}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {datosEdad.map((entry, index) => (
                      <Cell key={`cell-edad-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={customTooltipEdad} />
                </PieChart>
              </ChartContainer>
            </div>
          </div>

          {/* Gráfica de Línea - Edad */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">
              Distribución por Rango de Edad
            </h2>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <LineChart data={datosEdad}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  dataKey="age_range"
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                />
                <ChartTooltip content={customTooltipEdad} />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#FF6B9D" 
                  strokeWidth={3}
                  dot={{ fill: "#FF6B9D", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        {/* Sección de Años de Experiencia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfica de Pastel - Experiencia */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 lg:col-span-2 flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl font-bold mb-6 text-black text-center border-b border-white/20 pb-3">
                Años de Experiencia
              </h2>
              <div className="flex justify-center">
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                  <PieChart>
                    <Pie
                      data={datosExperiencia}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ experience_years, percentage }) => `${experience_years} años: ${percentage}%`}
                      outerRadius={140}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {datosExperiencia.map((entry, index) => (
                        <Cell key={`cell-exp-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={customTooltipExperiencia} />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Especialidades */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Gráfica de Pastel - Especialidades */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-black text-center border-b border-white/20 pb-3">
              Especialidades
            </h2>
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="h-[600px] w-full">
                <PieChart>
                  <Pie
                    data={datosEspecialidades}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ specialty_group, percentage }) => {
                      // Solo mostrar etiquetas para porcentajes mayores a 2%
                      if (percentage > 2) {
                        return `${specialty_group}: ${percentage}%`;
                      }
                      return '';
                    }}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {datosEspecialidades.map((entry, index) => (
                      <Cell key={`cell-esp-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={customTooltipEspecialidades} />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Sección de Tecnologías */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Gráfica de Barras - Tecnologías */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-black text-center border-b border-white/20 pb-3">
              Tecnologías
            </h2>
            <ChartContainer config={chartConfig} className="h-[800px]">
              <BarChart 
                data={[...datosTecnologias].sort((a, b) => b.mention_count - a.mention_count)} 
                layout="vertical"
                margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis 
                  type="number"
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                />
                <YAxis 
                  type="category"
                  dataKey="technology_name"
                  stroke="#ffffff80"
                  tick={{ fill: '#ffffff' }}
                  width={140}
                />
                <ChartTooltip content={customTooltipTecnologias} />
                <Bar 
                  dataKey="mention_count" 
                  fill="#FF6B9D" 
                  radius={[0, 8, 8, 0]}
                >
                  {datosTecnologias.map((entry, index) => (
                    <Cell key={`cell-tech-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </Gradient>
  );
};

export default Estadisticas;

