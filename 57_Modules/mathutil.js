// ---------- mathutil.js ----------

export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return 4 * PI * radius * radius;
}

// key words export giúp cho xuất đoạn code này, các file các có thể dùng cú pháp import để lấy các export này.