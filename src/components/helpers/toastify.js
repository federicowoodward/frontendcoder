import Toastify from 'toastify-js'
export default function createToasty(text, duration, destination, style){
    let style_type;

    switch (style) {
        case 'success':
            style_type = "linear-gradient(to right, #00b09b, #96c93d)";
            break;
        case 'info':
            style_type = "linear-gradient(90deg, rgba(255,166,0,1) 0%, rgba(255,244,0,1) 100%)";
        default:
        case 'error':
            style_type = "linear-gradient(90deg, rgba(207,0,0,1) 0%, rgba(247,130,130,1) 93%)";
            break;
    }
    
    return Toastify({
        text: text,
        duration: duration || 15000,
        destination: destination || "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: style_type,
        },
        className: 'toastify',
        onClick: function(){} // Callback after click
      })
}