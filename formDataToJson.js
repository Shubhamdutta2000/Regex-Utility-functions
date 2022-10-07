function fromDataToJson(formData) {
    const data = {};

    for (const [key, value] of formData.entries()) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const oldValue = data[key];
            if (!Array.isArray(data[key])) {
                data[key] = [];
                data[key].push(oldValue);
            }

            data[key].push(value);

            continue;
        }

        data[key] = value;
    }

    return data;
}

