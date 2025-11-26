export const shapes = [
    { type: "entrance", label: "Entrada", x: 0.845, y: 0.75, width: 0.13, height: 0.11, color: "blue" },
    { type: "free_space", label: "", x: 0.45, y: 0.79, width: 0.1, height: 0.1, color: "white" },
    { type: "main_stage", label: "Sala Principal", x: 0.02, y: 0.21, width: 0.445, height: 0.5, color: "blue" },
    { type: "sala_1", label: "Sala 1", x: 0.52, y: 0.19, width: 0.135, height: 0.245, color: "orange" },
    { type: "sala_2", label: "Sala 2", x: 0.52, y: 0.46, width: 0.135, height: 0.245, color: "orange" },
    { type: "sala_3", label: "Sala 3", x: 0.67, y: 0.19, width: 0.135, height: 0.245, color: "orange" },
    { type: "sala_speakers", label: "Speakers", x: 0.02, y: 0.84, width: 0.085, height: 0.14, color: "green" },
    { type: "coffe_break", label: "Coffe Break", x: 0.19, y: 0.19, width: 0.11, height: 0.05, color: "pink" },
    { type: "tamales", label: "Tamales", x: 0.31, y: 0.19, width: 0.11, height: 0.05, color: "pink" },
    { type: "comedor_1", label: "Comedor", x: 0.67, y: 0.46, width: 0.154, height: 0.25, color: "green" },
    { type: "comedor_2", label: "Comedor", x: 0.824, y: 0.22, width: 0.135, height: 0.490, color: "green" },
    { type: "wc_1", label: "Baños", x: 0.05, y: 0.02, width: 0.228, height: 0.12, color: "red" },
    { type: "wc_2", label: "Baños", x: 0.705, y: 0.02, width: 0.228, height: 0.12, color: "red" },

    { type: "p1", label: "Puerta", x: 0.1, y: 0.69, width: 0.08, height: 0.05, color: "black" },
    { type: "p2", label: "Puerta", x: 0.3, y: 0.69, width: 0.08, height: 0.05, color: "black" },
    { type: "p3", label: "Puerta", x: 0.462, y: 0.26, width: 0.06, height: 0.12, color: "black" },
    { type: "p4", label: "Puerta", x: 0.462, y: 0.53, width: 0.06, height: 0.12, color: "black" },
    { type: "p5", label: "Puerta", x: 0.548, y: 0.69, width: 0.08, height: 0.05, color: "black" },
    { type: "p6", label: "Puerta", x: 0.63, y: 0.26, width: 0.06, height: 0.12, color: "black" },
    { type: "p7", label: "Puerta", x: 0.63, y: 0.53, width: 0.06, height: 0.12, color: "black" },
    { type: "p8", label: "Puerta", x: 0.785, y: 0.26, width: 0.06, height: 0.12, color: "black" },
    { type: "p9", label: "Puerta", x: 0.78, y: 0.69, width: 0.08, height: 0.05, color: "black" },
    { type: "p_wc_1", label: "Puerta", x: 0.117, y: 0.17, width: 0.055, height: 0.06, color: "black" },
    { type: "p_wc_2", label: "Puerta", x: 0.8, y: 0.17, width: 0.05, height: 0.06, color: "black" },
    { type: "assistant", label: "Tu", x: 0.86, y: 0.8, radius: 0.01, color: "red" },

    /**{
        type: "path",
        label: "Camino",
        x1: 0.1, y1: 0.1,
        x2: 0.8, y2: 0.9,
        thickness: 0.003,
        color: "red"
    }**/
];

export const shapeMap = Object.fromEntries(
    shapes.map(s => [s.type, s])
);

export const graph = {
    entrance: ["p5", "p9", "free_space"],
    free_space: ["p2", "p1", "p5", "p9", "sala_speakers", "entrance"],
    main_stage: ["coffe_break", "tamales", "p2", "p1", "p3", "p4", "p_wc_1"],
    sala_1: ["p3", "p6"],
    sala_2: ["p4","p7"],
    sala_3: ["p6", "p8"],
    sala_speakers: ["p1","p2","free_space"],
    coffe_break: ["main_stage"],
    tamales: ["main_stage"],
    comedor_1: ["p7", "p9", "comedor_2"],
    comedor_2: ["p8", "p9", "p_wc_2", "comedor_1"],
    p1: ["main_stage", "sala_speakers", "free_space"],
    p2: ["main_stage", "sala_speakers", "free_space"],
    p3: ["main_stage", "sala_1"],
    p4: ["main_stage", "sala_2"],
    p5: ["sala_speakers", "sala_2", "entrance"],
    p6: ["sala_1", "sala_3"],
    p7: ["sala_2", "comedor_1"],
    p8: ["sala_3", "comedor_2"],
    p9: ["comedor_1", "comedor_2", "free_space", "entrance"],
    p_wc_1: ["main_stage", "wc_1"],
    p_wc_2: ["comedor_2", "wc_2", "p8"],
    wc_1: ["p_wc_1"],
    wc_2: ["p_wc_2"],
}
