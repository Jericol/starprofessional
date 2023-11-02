import { TECollapse } from "tw-elements-react";
import { Fragment, useState } from "react";


function DataProcessing() {

    const [activeElement, setActiveElement] = useState("");


    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };


    return (
        <div className="pl-2 lg:h-[100rem] h-[130rem] overflow-y-auto">
            {/* elemento 1 */}
            <div id="accordionExample">
                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${activeElement === "element1" &&
                                `text-blue-400 dark:text-blue-400`
                                } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                font-semibold`}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Política de tratamiento de datos
                            <span
                                className={`${activeElement === "element1"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element1"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <div className="px-5 py-4">
                            El objetivo de la presente política de tratamiento de datos personales (en adelante la “PTDP”)
                            es desarrollar y establecer los criterios, términos y condiciones con los cuales  <span className="font-semibold">IMPORTADORA Y DISTRIBUIDORA STAR S.A.S.</span>
                            <br /> (en adelante “Importadora Star”) recolecta,
                            almacena, utiliza, circula, suprime y en general trata los Datos Personales de los Titulares
                            (como se definen más adelante). En armonía con lo previsto en el artículo 15 de la Constitución
                            Política de Colombia, la Ley 1266 de 2008, la Ley 1581 de 2012, el Decreto 1377 de 2013 y y 886 de 2014
                            (hoy incorporados en el Decreto único 1074 de 2015), entre otros todas aquellas normas que las reglamenten,
                            adicionen, deroguen o modifiquen, esta PTDP aplica para toda la información personal registrada en las
                            bases de datos de Importadora Star y se establecen las políticas, términos y condiciones con las cuales
                            Importadora Star trata los Datos Personales de los Titulares (tal y como se definen más adelante),
                            las finalidades del Tratamiento, los derechos de los Titulares y los mecanismos con que cuentan
                            los Titulares para conocer, actualizar, rectificar, suprimir y en general hacer valer su derecho al habeas data.
                            Esta PTDP será de obligatorio cumplimiento para Importadora Star y todos sus colaboradores,
                            proveedores, trabajadores, especialistas, y en general para cualquier persona, natural o jurídica
                            que trate Datos Personales, ya sea en nombre y por cuenta de Importadora Star o que Importadora Star
                            se los haya transferido. A su vez, los Titulares, al Autorizar el Tratamiento de sus Datos Personales,
                            aceptan totalmente la presente PTDP y sus adiciones o modificaciones, las cuales les serán informadas a
                            través de medio idóneos, conforme con la normatividad vigente.
                            La recolección, almacenamiento, uso, circulación o cualquier otra operación o conjunto de operaciones
                            sobre Datos Personales de los Titulares tendrá como finalidad el desarrollo del objeto social de Importadora Star,
                            incluyendo el desarrollo de su actividad empresarial mediante plataformas tecnológicas digitales, entre otras,
                            así como, el cumplimiento de las normas legales aplicables a la prestación de servicios y demás requerimientos
                            administrativos y operativos de Importadora Star. Si los Datos Personales suministrados son de naturaleza
                            financiera, crediticia o comercial, serán objeto de Tratamiento para llevar a cabo transacciones surgidas de las
                            relaciones contractuales que se generen en los Titulares e Importadora Star, o terceros con los cuales Importadora
                            Star tiene relación.
                            Así mismo, si los Titulares entregan información a través de la página web Star Professional  <span className="font-semibold">www.starprofessional.com.co</span> <br />
                            Importadora Star utilizará la información para el envío de cookies al
                            disco duro de los Titulares, con el objetivo de facilitar su navegación en la página web.
                            PRINCIPIOS RECTORES En el desarrollo, interpretación y aplicación de la ley, regulaciones,
                            y normatividad vigente, se aplicarán, de manera armónica e integral, los siguientes principios:
                            <span className="font-semibold"> a.)</span> Principio de Legalidad en Materia de Tratamiento de Datos: El Tratamiento es una actividad
                            reglada que debe sujetarse a lo establecido en la Ley 1581 del 17 de octubre de 2012, decretos
                            reglamentarios y demás disposiciones que la desarrollen.
                            <span className="font-semibold"> b.)</span> Principio de Finalidad: El Tratamiento debe obedecer a una finalidad legítima de
                            acuerdo con la Constitución y la Ley, la cual debe ser informada al Titular.
                            <span className="font-semibold"> c.)</span> Principio de Libertad: El Tratamiento sólo puede ejercerse con el consentimiento,
                            previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados
                            sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.
                            <span className="font-semibold"> d.)</span> Principio de Veracidad o Calidad: La información sujeta a Tratamiento debe ser veraz, completa,
                            exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de Datos parciales,
                            incompletos, fraccionados o que induzcan a error.
                            <span className="font-semibold"> e.)</span> Principio de Transparencia: En el Tratamiento debe garantizarse el derecho del Titular a obtener
                            del responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones,
                            información acerca de la existencia de datos que le conciernan.
                            <span className="font-semibold"> f.)</span> Principio de Acceso y Circulación Restringida: El Tratamiento se sujeta a los límites que se derivan de la
                            naturaleza de los datos personales, de las disposiciones de la ley y la Constitución. En este sentido,
                            el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en la ley.
                            Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros
                            medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar
                            un conocimiento restringido sólo a los Titulares o terceros autorizados.
                            <span className="font-semibold"> g.)</span> Principio de Seguridad: La información sujeta a Tratamiento por el responsable del Tratamiento o Encargado
                            del Tratamiento a que se refiere la ley, se deberá manejar con las medidas técnicas, humanas y administrativas
                            que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o
                            acceso no autorizado o fraudulento.
                            <span className="font-semibold"> h.)</span> Principio de Confidencialidad: Todos los funcionarios y contratistas que intervengan en el Tratamiento de
                            Datos Personales están obligados a garantizar la reserva de la información, inclusive después de finalizada
                            su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o
                            comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la ley
                            y en los términos de la misma. La EMPRESA se compromete a tratar los datos personales de los titulares tal y
                            como lo define el literal g.) del artículo 3 de la Ley 1581 de 2012 de forma absolutamente confidencial
                            haciendo uso de estos, exclusivamente, para las finalidades indicadas en el apartado anterior, siempre
                            que el titular no se haya opuesto a dicho tratamiento. LA EMPRESA informa que tiene implantadas
                            las medidas de seguridad de índole técnica y organizativas necesarias que garanticen la seguridad de sus
                            datos personales y eviten su alteración, pérdida, tratamiento y/o acceso no autorizado.
                            <span className="font-semibold"> i.)</span> Principio de temporalidad: Los datos personales se conservarán únicamente por el tiempo
                            razonable y necesario para cumplir las finalidades que justificaron el tratamiento,
                            atendiendo a las disposiciones aplicables a la materia de que se trate y a los
                            aspectos administrativos, contables, fiscales, jurídicos e históricos de la información.
                            Los datos serán conservados cuando ello sea necesario para el cumplimiento de una
                            obligación legal o contractual. Una vez cumplida la finalidad del tratamiento y
                            los términos establecidos anteriormente, se procederá a la supresión de los datos.
                            <span className="font-semibold"> j.)</span> Interpretación integral de los derechos constitucionales: Los derechos se interpretarán en armonía
                            y en un plano de equilibrio con el derecho a la información previsto en el artículo 20 de la Constitución
                            y con los derechos constitucionales aplicables.
                            <span className="font-semibold"> k.)</span> Principio de Necesidad: Los datos personales tratados deben ser los estrictamente necesarios
                            para el cumplimiento de las finalidades perseguidas con la base de datos.
                        </div>
                    </TECollapse>
                </div>
            </div>
            {/* Elemento 2# */}
            <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingTwo">
                    <button
                        className={`${activeElement === "element2"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] 
                            focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element2")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        I. definiciones
                        <span
                            className={`${activeElement === "element2"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element2"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                >
                    <div className="px-5 py-4">
                        Para efectos de la interpretación de los términos de la presente PTDP, se observarán las siguientes reglas:
                        (i) Los términos con letra inicial mayúscula tendrán el significado que a ellos se asigna.
                        (ii) Los términos que denoten el singular también incluyen el plural y viceversa, siempre que el contexto
                        así lo requiera. (iii) Los términos que no estén expresamente definidos se entenderán en el sentido que
                        les atribuya el lenguaje técnico, o en su sentido natural, según su uso general.
                        (iv) Las referencias a leyes aplicables o a disposiciones legales incluyen todas las leyes aplicables o
                        disposiciones legales adicionadas, extendidas, consolidadas, modificadas o remplazadas de tiempo en tiempo
                        y a cualquier orden, regulación, instrumento u otra disposición realizada en virtud de los mismos. (v)
                        Los títulos y/o secciones incluidas en la presente Política de Tratamiento de Datos Personales han sido
                        incorporados por conveniencia y no se considerarán parte de la misma ni limitarán el alcance de los
                        términos y disposiciones de la misma. (vi) Cualquier enumeración o relación de conceptos donde exista
                        la conjunción disyuntiva “o” deberá entenderse que comprende a algunos o a todos los elementos de tal
                        enumeración o relación. Así mismo, cualquier enumeración o relación de conceptos donde exista la conjunción
                        copulativa “y” deberá entenderse que incluye a todos y cada uno de los elementos de tal enumeración o relación.
                        Sin perjuicio de las demás definiciones que se encuentren en la presente PTDP, de conformidad con la
                        normatividad vigente, se tendrán las siguientes definiciones: a) “Autorización”: consentimiento previo,
                        expreso e informado del Titular para que Importadora Star lleve a cabo el Tratamiento de sus Datos Personales,
                        que podrá solicitarse a través de diferentes medios, y podrá ser: (i) por escrito; (ii) de forma oral; o
                        (iii) mediante conductas inequívocas del Titular, que permitan concluir de forma razonable que otorgó
                        la autorización. b) “Aviso de Privacidad”: comunicación verbal o escrita generada por el “Responsable”,
                        dirigida al Titular para el Tratamiento de sus datos personales, mediante la cual se le informa acerca de la
                        existencia de la PTDP, la forma de acceder a la PTDP y las finalidades del Tratamiento que
                        Importadora Star dará a los Datos Personales. c) “Base de Datos”: conjunto organizado de Datos Personales
                        objeto de Tratamiento por parte de Importadora Star. d) “Cliente”: personas naturales que
                        adquieren un producto o servicio determinado, ofrecido por Importadora Star. e) “Dato Personal”:
                        cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o
                        determinables. Importadora Star tratará los Datos Personales que se establecen en la Sección V de la
                        presente PTDP. f) “Dato Público”: es el dato que no sea semiprivado, privado o sensible.
                        Son considerados Datos Públicos, entre otros, los datos relativos al estado civil de las personas,
                        a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza,
                        los Datos Públicos, pueden e Importadora Star contenidos, entre otros, en registros públicos,
                        documentos públicos, gacetas y boletines oficiales y sentencias judiciales debidamente ejecutoriadas
                        que no estén sometidas a reserva. g) “Datos Sensibles”: aquellos que afectan la intimidad del Titular o
                        cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico,
                        la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos,
                        organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que
                        garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la
                        salud, a la vida sexual, y los datos biométricos. La respuesta a las preguntas que le sean hechas a los
                        Titulares sobre Datos Sensibles, así como, los datos de las niñas, niños y adolescentes será de carácter
                        facultativo para el Titular. h) “Encargado del Tratamiento”: persona natural o jurídica, pública o privada,
                        que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del
                        “Responsable del Tratamiento”. i) “Responsable del Tratamiento”: persona natural o jurídica, pública o
                        privada, que por sí misma o en asocio con otros, decide sobre la Base de Datos y/o el Tratamiento
                        de los Datos Personales, para efectos de la PTDP, al referirse a al Responsable del Tratamiento,
                        se referirá a Importadora Star. j) “Titular”: persona natural cuyos Datos Personales sean objeto de
                        Tratamiento. Los Titulares se encuentran definidos en la Sección V de la presente PTDP. k) “Transferencia”:
                        la transferencia tendrá lugar cuando el Responsable del Tratamiento y/o Encargado del Tratamiento de datos
                        personales, envíe la información o los Datos personales a un receptor, que a su vez sea Responsable del
                        Tratamiento y se encuentre dentro o fuera del país. l) “Transmisión”: tratamiento de Datos Personales que
                        implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando
                        tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable
                        del Tratamiento. m) “Tratamiento”: cualquier operación o conjunto de operaciones sobre datos
                        personales, tales como la recolección, almacenamiento, uso, circulación o supresión que se
                        realizará únicamente para las finalidades que se establecen en la presente PTDP previa
                        Autorización del Titular. <br />
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 3# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element3"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element3")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        II. Alcance de tratamiento de datos personales y datos sensibles
                        <span
                            className={`${activeElement === "element3"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element3"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Para la prestación de servicios relacionados con el objeto social de Importadora Star; así como, con las
                        finalidades comerciales y de mejoramiento de calidad, entre otras y de las gestiones para el desarrollo
                        de su objeto social, y, en general, en el giro ordinario de sus negocios en sus Establecimientos de Comercio
                        o a través de sus Tiendas Virtuales, ya sea de manera permanente u ocasional, Importadora Star tratará los
                        Datos Personales y Datos Sensibles de los Titulares y realizará operaciones de recolección, uso, almacenamiento,
                        circulación, supresión, Transmisión o Transferencia de Datos Personales y Datos Sensibles de los Titulares y
                        en general de cualquier tercero con quien tenga algún tipo de relación contractual o vínculo de cualquier
                        naturaleza , o a cualquier tercero, tenga o no tenga relación comercial con Importadora Star, a quienes
                        podrá transferir la información recolectada para que la usen para sus propios fines.
                        La autorización expresa o mediante conductas inequívocas que den a entender razonablemente la Autorización
                        de los Titulares para el Tratamiento de sus Datos Personales y/o Datos Sensibles, implica que Importadora
                        Star podrá llevar a cabo el Tratamiento de Datos Personales, el cual, conforme con lo establecido en la presente
                        PTDP. En todo caso, esta PTDP, NO podrá interpretarse de forma alguna contraria a las leyes aplicables y/o a los
                        derechos que le corresponden a los Titulares.
                        Importadora Star, como Responsable del Tratamiento, hará su mejor esfuerzo profesional, para mantener bajo
                        adecuados estándares de calidad, de protección y seguridad de la información todos los Datos Personales que
                        reciba de los Titulares, especialmente los Datos Sensibles y los datos de niñas, niños y adolescentes.
                        Así mismo, hará sus mejores esfuerzos para garantizar que los Datos Personales y/o Datos Sensibles
                        recolectados tengan la protección técnica y jurídica necesaria para garantizar su seguridad,
                        integralidad, acceso y confidencialidad.
                        En ese orden de ideas, al autorizar el Tratamiento de sus Datos Personales los Titulares autorizan
                        expresamente a Importadora Star para que almacene sus Datos Personales y/o Datos Sensibles de la
                        forma que considere pertinente y adecuada y cumpla con la seguridad requerida para la protección de
                        los Datos Personales y Datos Sensibles, de acuerdo con los estándares normales y razonables aplicables y
                        demás actividades incluidas en su objeto social.
                        Los Titulares, al autorizar a Importadora Star para el Tratamiento de sus Datos Personales o Datos
                        Sensibles,
                        reconoce, de manera expresa, que las medidas establecidas en esta PTDP son apropiadas y efectivas en relación
                        con el cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013. Así mismo, reconoce que estas medidas son
                        proporcionales a la naturaleza jurídica de Importadora Star, la naturaleza de los Datos Personales objeto de
                        Tratamiento, el tipo de Tratamiento y los riesgos potenciales que el Tratamiento pueden causar sobre los
                        derechos de los Titulares.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 4# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element4"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element4")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        III. Identificación del responsable del tratamiento
                        <span
                            className={`${activeElement === "element4"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element4"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Importadora Star es una sociedad legalmente constituida bajo las Leyes de la República de Colombia,
                        dedicada principalmente al comercio al por mayor y al por menor de productos de belleza y cosméticos,
                        a través de los Establecimientos de Comercio STAR DIVINA, STAR BOUTIQUE, e IL BARBIERE,
                        así como de las tiendas virtuales a través de la página web Star Professional <span className="font-semibold">www.starprofessional.com.co</span>.
                        Esta PTDP es de obligatorio es estricto cumplimiento para Importadora Star cuya información es la siguiente:
                        Razón Social: <span className="font-semibold">IMPORTADORA Y DISTRIBUIDORA STAR S.A.S.</span> <br />
                        <span className="font-semibold">N.I.T:</span> 900760691 - 4 <br />
                        Podrán contactarse con Importadora Star en: <br />
                        •	Dirección: CRA 21 # 8-42 PISO 1 de la ciudad de Bogotá D.C. <br />
                        •	Correo Electrónico: admin@importaadorastar.com <br />
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 5# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element5"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element5")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        IV. Persona y área responsable de la atención de peticiones, consultas y reclamos
                        <span
                            className={`${activeElement === "element5"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element5"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        El área encargada dispuesta por Importadora Star para la atención de peticiones consultas y reclamos,
                        y en general para que los Titulares ejerzan sus derechos, será el área de Atención al Cliente, la persona
                        encargada será el/la señor/a [Nombre], que podrá ser contactado por los Titulares o sus causahabientes
                        para la atención de sus consultas, reclamos, peticiones de rectificación, actualización y supresión de
                        sus Datos Personales, directamente en la [Dirección], a través de comunicación física dirigida al área de
                        [Dirección], o mediante la solicitud expresa en el correo electrónico comprasimportadorastar@gmail.com
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 6# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element6"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element6")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        v. Persona y área responsable de la atención de peticiones, consultas y reclamos
                        <span
                            className={`${activeElement === "element6"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element6"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        •	En sus sedes en la ciudad de Bogotá D.C. <br />
                        •	www.starprofessional.com.co <br />
                        •	Call center y whastappp 3123924999 <br />
                        Estos Canales de Atención serán los puntos de contacto entre los Titulares e Importadora Star.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 7# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element7"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element7")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        VI. titulares y datos personales objeto de tratamiento
                        <span
                            className={`${activeElement === "element7"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element7"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Importadora Star tratará los Datos Personales de las siguientes personas
                        (para todos los efectos de la presente PTDP serán referidos como los “Titulares”): <br />
                        •   Clientes. <br />
                        •	Empleados. <br />
                        •	Exempleados. <br />
                        •	Pensionados. <br />
                        •	Practicantes.
                        •	Aprendices SENA. <br />
                        •	Aspirantes a una vacante laboral. <br />
                        •	Personas en procesos de selección. <br />
                        •	Familiares de empleados o exempleados, como su cónyuge, compañero permanente o hijos. <br />
                        •	Trabajadores en misión.
                        •	Proveedores. <br />
                        •	Prospectos. <br />
                        •	Contratistas. <br />
                        •	Terceros con relación comercial. <br />
                        •	Representantes de entidades públicas. <br />
                        •	Representantes de la competencia. <br />
                        •	Aliados comerciales. <br />
                        •	Socios. <br />
                        Mediante el suministro voluntario de sus Datos Personales y/o Datos Sensibles en la forma señalada en la presente
                        PTDP y en la autorización expresa, verbal, por escrito o mediante conductas inequívocas, los Titulares autorizan
                        expresa o inequívocamente a Importadora Star para tratar sus Datos Personales y/o Datos Sensibles y cualquier otra
                        información que suministren, de conformidad con esta PTDP, la ley y para las finalidades establecidas en la
                        presente PTDP (Sección VI) o cualquier finalidad adicional autorizada por los Titulares.
                        De manera general, Importadora Star podrá recolectar, de cualquiera de los Titulares: <br />
                        <span className="font-semibold">(a) Datos de identificación y ubicación</span> <br />
                        Nombres y apellidos completos, tipo y numero de documento de identidad, lugar y fecha de nacimiento, edad, sexo, estado civil.
                        Información sobre la dirección física habitual o de residencia, el domicilio, dirección y nombre
                        de la compañía en la que trabaja, entre otros. <br />
                        <span className="font-semibold">(b) Datos de contacto y comunicación</span> <br />
                        Números telefónicos y celulares, como también de correo electrónico y de identificación en redes sociales. <br />
                        <span className="font-semibold">(c) Datos laborales</span>  <br />
                        Información de naturaleza laboral y académica, la cual permite acreditar
                        la experiencia y la formación de su Titular, entre la que se encuentra información relativa a la escolaridad,
                        profesión u ocupación. <br />
                        <span className="font-semibold">(d) Datos de registro</span> <br />
                        En los casos de navegación en la  <span className="font-medium">www.starprofessional.com.co</span> se almacenará determinada
                        información de forma automática, entre la que se incluyen las consultas de búsqueda, dirección IP,
                        actividad del sistema, fallos informáticos, tipo de navegador, especificaciones que caracterizan las solicitudes, etc. <br />
                        <span className="font-semibold">(e) Datos de niñas, niños y adolescentes</span> <br />
                        Importadora Star podrá tratar Datos Personales de niños, niñas y adolescentes cuyo tratamiento se sujetará a las mismas
                        condiciones para el tratamiento de Datos Sensibles. El tratamiento de Datos Personales de niñas, niños y adolescentes queda prohibido,
                        salvo que se cumplan los siguientes requisitos:
                        Que responda al interés superior de las niñas, niños y adolescentes.
                        Que se asegure el respeto a los derechos fundamentales de los niños, niñas y adolescentes.
                        El tratamiento de los Datos Personales de niñas, niños y adolescentes será llevado a cabo previa autorización de su representante
                        legal o tutor, previo ejercicio por parte de la niña, niño o adolescente de su derecho a ser escuchado, y su opinión deberá ser
                        considerada considerando la madurez, autonomía y capacidad del menor y la respuesta a las preguntas que le sean hechas será meramente
                        facultativa. <br />
                        <span className="font-semibold">(f) Datos Sensibles</span> <br />
                        Importadora Star, podrá llevar a cabo el Tratamiento de Datos Sensibles que incluye datos biométricos,
                        como la huella dactilar o imagen (entendida como figura, fisonomía total o parcial del cuerpo del Titular)
                        de los Titulares. Los Datos Sensibles serán tratados para registro en la página web Star Professional
                        <span className="font-semibold">www.starprofessional.com.co</span> implementada por Importadora Star para las ventas virtuales, con el fin de identificar
                        al Titular, así como para procesos de selección de personal, vigilancia y seguridad en sus Establecimientos.
                        Importadora Star solo tratará los Datos Sensibles con la autorización previa y expresa del Titular.
                        Importadora Star informa a los Titulares de Datos Sensibles que proporcionar la información sensible es meramente
                        facultativa y no están obligados a entregar información relacionada con sus Datos Sensibles.
                        La Autorización de los Titulares para el Tratamiento de sus Datos Personales será otorgada por: (a)
                        los Titulares, quienes deberán acreditar su identidad a través de los medios en los que Importadora Star
                        se los solicite; b) los causahabientes o tutores del Titular, quienes deberán acreditar su calidad como
                        causahabientes del Titular; y c) el representante y/o apoderado del Titular, previa acreditación de la
                        representación o apoderamiento; y d) otro a favor o para el cual el Titular hubiere estipulado.
                        Los Titulares que entreguen sus Datos Personales o Datos Sensibles en cualquiera de los Canales de Atención,
                        autorizan a Importadora Star para tratar sus Datos Personales y/o Datos Sensibles.
                        Importadora Star podrá llevar a cabo el Tratamiento de: <br />
                        (i) Si se trata de Clientes, o prospectos o aliados comerciales, de cualquier naturaleza: <br />
                        •	Nombres y apellidos completos. <br />
                        •	Tipo y numero de documento de identidad (registro civil, cédula de ciudadanía, tarjeta de identidad,
                        pasaporte, cédula de extranjería, carnet diplomático, DNI o identificación internacional) <br />
                        •	Fecha y Lugar de nacimiento. <br />
                        •	Genero. <br />
                        •	Dirección de residencia. <br />
                        •	Escolaridad, profesión y ocupación. <br />
                        •	Datos de contacto de familiares. <br />
                        •	Número telefónico de línea fija. <br />
                        •	Número telefónico de línea móvil. <br />
                        •	Dirección de correo electrónico. <br />
                        •	Huella dactilar. <br />
                        •	Imagen. <br />
                        •	Datos financieros, crediticios y/o derechos de carácter económico. <br />
                        •	Grupo poblacional (por ejemplo: etnia, víctima del conflicto armado, desmovilizado, etc.). <br />
                        (ii) Si se trata de empleados, exempleados, pensionados, practicantes, aprendices SENA, aspirantes,
                        trabajadores en misión, proveedores, contratistas, colaboradores activos o inactivos, personal en práctica,
                        aspirantes a una vacante laboral, terceros con relación laboral o comercial, estudiantes,
                        familiares de empleados o exempleados, como su cónyuge, compañero permanente o hijos,
                        terceros con relación laboral o comercial, o aliados comerciales: <br />
                        •	Nombres y apellidos completos. <br />
                        •	Tipo y numero de documento de identidad (registro civil, cédula de ciudadanía,
                        tarjeta de identidad, pasaporte, cédula de extranjería, carnet diplomático, DNI o identificación internacional) <br />
                        •	Fecha y Lugar de nacimiento. <br />
                        •	Genero. <br />
                        •	Dirección de residencia. <br />
                        •	Escolaridad, profesión y ocupación. <br />
                        •	Datos de contacto de familiares. <br />
                        •	Número telefónico de línea fija. <br />
                        •	Número telefónico de línea móvil. <br />
                        •	Dirección de correo electrónico. <br />
                        •	Huella dactilar. <br />
                        •	Imagen. <br />
                        •	Datos financieros, crediticios y/o derechos de carácter económico. <br />
                        •	Grupo poblacional (por ejemplo: etnia, víctima del conflicto armado, desmovilizado, etc.). <br />
                        La Autorización podrá con Importadora Star en un documento físico, electrónico, en cualquier
                        otro formato que permita garantizar su posterior consulta, o mediante un mecanismo técnico o tecnológico
                        idóneo mediante el cual se pueda concluir de manera inequívoca, que, de no haberse surtido una conducta del
                        Titular, los Datos Personales nunca hubieren sido capturados y almacenados en la Base de Datos.
                        Importadora Star adoptará las medidas necesarias para mantener registros o mecanismos técnicos o
                        tecnológicos idóneos de cuándo y cómo obtuvo autorización por parte de los Titulares
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 8# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element8"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element8")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        vii. finalidades del tratamiento
                        <span
                            className={`${activeElement === "element8"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element8"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Los Datos Personales y Datos Sensibles recolectados por Importadora Star tienen como finalidad general:
                        (a) efectuar las gestiones pertinentes para el desarrollo de su objeto social en lo que tiene que ver
                        con la venta y comercialización de productos de belleza, tanto como en las tiendas físicas como en las
                        tiendas virtuales; (b) el cumplimiento de la normatividad vigente; (c) establecer comunicación con los
                        Titulares para cualquier propósito relacionado con las finalidades que se establecen en la presente PTDP,
                        ya sea mediante llamadas, mensajes de texto, correos electrónicos y/o físicos;
                        (d) el envío de información sobre los productos o servicios, así como, novedades,
                        noticias, publicaciones y promociones propias o de terceros, invitaciones a eventos y ofrecer
                        nuevos productos y servicios; (e) enviar información sobre programas propios y de terceros;
                        (f) realizar estudios o investigaciones científicas para uso académico o comercial;
                        (g) ya sea directamente o a través de terceros: consultar, llevar a cabo trámites administrativos,
                        enviar información comercial, solicitar diligenciamiento de encuestas, recolectar, almacenar, usar,
                        circular, suprimir, procesar, contactar, encuestar, compilar, intercambiar, publicar, auditar,
                        actualizar y/o disponer de los Datos Personales que los Titulares suministren para incorporarlos
                        en las distintas Bases de Datos de Importadora Star; (h) gestionar solicitudes, quejas o reclamos;
                        (i) garantizar la seguridad de personas, bienes de Importadora Star o visitantes, instalaciones,
                        salud ocupacional, seguridad industrial, informática y de la información;
                        (j) controlar el acceso y establecer medidas de seguridad, incluyendo el establecimiento de zonas video-vigiladas;
                        (k) prevenir, monitorear, detectar, investigar, analizar y/o controlar amenazas o incidentes de seguridad
                        informática o de la información y ejecutar las medidas pertinentes para solucionarlos;
                        (l) el desarrollo de sus políticas de prevención, detección, monitoreo y control del lavado de
                        activos y el financiamiento del terrorismo; y (m) transferir los datos recopilados a terceros
                        gratuita u onerosamente para que estos los utilicen para sus propios fines particulares.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 9# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element9"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element9")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        viii. derechos de los titulares
                        <span
                            className={`${activeElement === "element9"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element9"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Los derechos de los Titulares a que hace referencia la presente Política de Tratamiento de Datos Personales
                        están contenidos en la Ley 1581 de 2012 y en el Decreto 1377 de 2013. En particular, son derechos de los
                        Titulares según se establece en el artículo 8 de la Ley 1581 de 2012: (iv) Conocer, actualizar y rectificar
                        sus datos personales frente a Importadora Star, como Responsable del Tratamiento o Encargados del Tratamiento.
                        (v) Solicitar prueba de la autorización otorgada a Importadora Star como Responsable del Tratamiento,
                        salvo cuando expresamente se exceptúe como requisito para el Tratamiento, de conformidad con lo previsto
                        en el artículo 10 de la Ley 1581 de 2012. (vi) Ser informado por Importadora Star, como Responsable del
                        Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus
                        Datos Personales. (vii) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones
                        a lo dispuesto en la normatividad vigente. (viii) Revocar la Autorización y/o solicitar la supresión del
                        Dato Personal cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y
                        legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y
                        Comercio haya determinado que, en el Tratamiento, Importadora Star o el Encargado del Tratamiento,
                        incurrieron en conductas contrarias a la ley o a la Constitución. (ix) Abstenerse de responder preguntas
                        sobre Datos Sensibles. Importadora Star es transparente con los Titulares y le informa que la entrega de
                        Datos Sensibles tendrá carácter facultativo, así como respuestas que versen sobre datos de niños,
                        niñas y adolescentes. (x) Acceder en forma gratuita a sus Datos Personales objeto de tratamiento por
                        parte de Importadora Star. Los Titulares podrán, en cualquier momento, acceder a los Datos Personales
                        almacenados por Importadora Star y a los detalles del Tratamiento, así como a rectificarlos en caso de ser
                        inexactos o estar incompletos, y a suprimirlos cuando considere que no se requieren para alguna de las
                        finalidades señaladas en esta PTDT, cuando estén siendo utilizados para finalidades no autorizadas, o bien,
                        oponerse simplemente al Tratamiento. Derechos de los niños y adolescentes En el tratamiento de datos
                        personales se asegurará el respeto a los derechos prevalentes de los menores.
                        Queda proscrito el tratamiento de datos personales de menores, salvo aquellos datos que sean de
                        naturaleza pública, y en este caso el tratamiento deberá́ cumplir con los siguientes parámetros: a.
                        Responder y respetar el interés superior de los menores. b. Asegurar el respeto de los derechos
                        fundamentales de los menores. Es tarea del Estado y las entidades educativas de todo tipo proveer
                        información y capacitar a los representantes legales y tutores sobre los eventuales riesgos a los que se
                        enfrentan los niños, niñas y adolescentes respecto del Tratamiento indebido de sus datos personales, y
                        proveer de conocimiento acerca del uso responsable y seguro por parte de niños, niñas y adolescentes de sus
                        datos personales, su derecho a la privacidad y protección de su información personal y la de los demás.
                    </div>
                </TECollapse>
            </div>
            {/* Elemnto 10# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element10"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element10")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        ix. seguridad de las bases de datos
                        <span
                            className={`${activeElement === "element10"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element10"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Las medidas de seguridad con las que cuenta Importadora Star buscan proteger los Datos Personales de los
                        Titulares, en aras de impedir su adulteración, pérdida, usos y accesos no autorizados. Para ello, Importadora
                        Star de forma diligente implementa medidas de protección administrativas, jurídicas y técnicas que razonablemente
                        están a su alcance. Los Titulares aceptan expresamente esta forma de protección y declaran que la consideran
                        conveniente y suficiente para todos los propósitos. De igual forma, los terceros contratados por Importadora Star
                        están obligados a adherirse y dar cumplimiento a las políticas y manuales de seguridad de la información,
                        así como a los protocolos de seguridad que Importadora Star aplica a todos sus procesos. Todo contrato de
                        Importadora Star con terceros (contratistas, consultores externos, colaboradores temporales, etc.)
                        que involucre el Tratamiento, incluye un acuerdo de confidencialidad que detalla sus compromisos para la protección,
                        cuidado, seguridad y preservación de la confidencialidad, integridad y privacidad de la misma.
                        En el almacenamiento de la información, Importadora Star ha tomado una serie de medidas para proteger los
                        Datos Personales de un mal uso, pérdida, acceso no autorizado, modificación o divulgación.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 11# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element11"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element11")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        x. atención de peticiones, consultas y reclamos
                        <span
                            className={`${activeElement === "element11"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element11"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Para la radicación y atención de su petición, consulta o reclamo el Titular deberá suministrar
                        la siguiente información: 1. Nombre completo y apellidos. 2. Dirección física. 3. Correo electrónico.
                        4. Número de teléfono (línea fija). 5. Número de móvil. 6. Medios para recibir respuesta a su solicitud.
                        7. Motivo(s)/hecho(s) que dan lugar al reclamo con una breve descripción del derecho que desea ejercer
                        (conocer, actualizar, rectificar, solicitar prueba de la autorización otorgada, revocarla, suprimir,
                        acceder a la información). 8. Firma (si aplica) y número de identificación. Los Titulares podrán presentar
                        sus peticiones, consultas y reclamos, en cualquiera de los siguientes canales:
                        (i) Acudir en el horario de [Completar] de lunes a viernes, a la sede administrativa,
                        donde podrá presentarlo directamente ante el área encargada, en la dirección Carrera 21 # 8-42 PISO 1
                        en la ciudad de Bogotá D.C. (ii) Mediante el envío de comunicación escrita a la dirección:
                        Carrera 21 # 8-42 PISO 1 en la ciudad de Bogotá D.C. (iii) Mediante llamada telefónica al teléfono:
                        Call center y whastappp 3123924999 (iv) Mediante correo electrónico a la dirección: EMAIL admin@importadorastar.com
                        Los Titulares o sus causahabientes podrán ejercer sus derechos o presentar peticiones, consultas o reclamos conforme con los procedimientos establecidos
                        en la presente Sección. La petición, consulta o reclamo será atendida en un término máximo de quince (15) días hábiles contados a partir de la fecha de recibo.
                        Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado, expresando los motivos de la demora y señalando la fecha en que
                        se atenderá su consulta, la cual en ningún caso podrá superará los ocho (8) días hábiles siguientes al vencimiento del primer término. El Titular o sus causahabientes
                        que pretendan ejercer sus derechos como la corrección, actualización o supresión de sus Datos Personales que son objeto de Tratamiento por parte de Importadora Star,
                        podrán presentar su solicitud, conforme con el procedimiento establecido en la presente Sección. Importadora Star atenderá cualquier solicitud en el término máximo
                        previsto por la ley de quince (15) días hábiles, contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término,
                        se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término. La solicitud de supresión de la información o la revocatoria de la autorización no será procedente cuando el Titular tenga un deber legal o contractual de permanecer en la base de datos. Para más información sobre su privacidad y la protección del consumidor visite: www.sic.gov.co. Si Importadora Star impide total o parcialmente el ejercicio del derecho por parte del Titular, este podrá acudir a la Delegatura de Protección de Datos Personales de la Superintendencia de Industria y Comercio.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 12# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element12"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element12")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        xi. nuevos usos
                        <span
                            className={`${activeElement === "element12"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element12"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Importadora Star podrá solicitar autorización para el uso o circulación de los Datos Personales de los
                        Titulares u otro tipo de información, para finalidades diferentes a los expresados en la presente PTDP,
                        para lo cual publicará en cualquier medio público que estime conveniente según el caso.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 13# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element13"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element13")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        xii. temporalidad
                        <span
                            className={`${activeElement === "element13"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element13"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Importadora Star usará, tratará, almacenará o circulará los Datos Personales y Datos
                        Sensibles recolectados conforme con la PTDT durante un término que sea razonable y necesario,
                        de acuerdo con las finalidades que justificaron el Tratamiento. Una vez cumplidas las finalidades del Tratamiento
                        y sin perjuicio de las normas legales que dispongan lo contrario, Importadora Star procederá a suprimir los Datos
                        Personales en su posesión. Salvo que estos deban ser conservados cuando así se requiera para el cumplimiento
                        de una obligación legal o contractual.
                    </div>
                </TECollapse>
            </div>
            {/* Elemto 14# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element14"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element14")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        xiii. modificaciones
                        <span
                            className={`${activeElement === "element14"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element14"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Sin perjuicio de los derechos constitucionales y las disposiciones legales y reglamentarias aplicables,
                        en especial las contenidas en la Ley 1581 de 2012, y el Decreto 1377 de 2013, Importadora Star podrá modificar en
                        cualquier momento esta PTDP. Tales modificaciones serán informadas a los Titulares través de cualquier otro
                        mecanismo de difusión dirigida o masiva no dirigida.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 15# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element15"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element15")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        xiv. propiedad intelectual
                        <span
                            className={`${activeElement === "element15"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element15"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Las Bases de Datos, o los distintos tipos de repositorios electrónicos, son creaciones
                        intelectuales sujetas a la protección del derecho de autor. Importadora Star es el titular de las Bases de Datos
                        que utiliza, para lo cual se sujeta plenamente a las normas sobre protección de Datos Personales y habeas data
                        contenidas en la Ley 1581 de 2012, y el Decreto 1377 de 2013. En consecuencia, Importadora Star como titular de
                        derechos sobre las Base de Datos, es el único que tiene la facultad para autorizar el uso, reproducción o
                        disposición de las mismas a terceros.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 16# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element16"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element16")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        xv. control y acceso a videovigilancia
                        <span
                            className={`${activeElement === "element16"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element16"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        control acceso Las áreas donde se ejecutan procesos relacionados con información confidencial o restringida
                        deben contar con controles de acceso que sólo permitan el ingreso a los colaboradores autorizados y que permita
                        guardar la trazabilidad de los ingresos y salidas.
                        VIDEO VIGILANCIA La Empresa cuenta con cámaras de video vigilancia que tienen como finalidad dar cumplimiento a
                        las políticas de seguridad física, cumpliendo con los parámetros legales. Las imágenes deberán ser conservadas
                        por un tiempo máximo 15 dias. En caso que la imagen respectiva sea objeto o soporte de una reclamación, queja,
                        o cualquier proceso de tipo judicial, hasta el momento en que sea resuelto.
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 17# */}
            <h3 className="p-2 font-semibold font-righteous text-2xl">Terminos y Condiciones</h3>
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element17"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element17")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        autorizo a importadora star
                        <span
                            className={`${activeElement === "element17"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element17"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        De conformidad con lo establecido por la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás
                        normas complementarias y la Política de Tratamiento de Datos Personales de la página web www.starprofessional.com.co
                        de la compañía IMPORTADORA Y DISTRIBUIDORA STAR S.A.S (en adelante “Importadora Star”), me permito declarar de manera
                        expresa que: Al realizar la Compra de los Productos comercializados por Importadora Star y entregar mis datos personales
                        AUTORIZO de manera libre, voluntaria, previa, explícita, informada e inequívoca a Importadora Star, o a quién esta delegue,
                        o a quién represente sus derechos, o a quién en el futuro detente su posición contractual, para que en los términos
                        legalmente establecidos realice la recolección, almacenamiento, uso, circulación, supresión y en general, el tratamiento de los
                        datos personales que, en virtud de las relaciones legales, contractuales, comerciales y/o de cualquier otra naturaleza que surjan,
                        en desarrollo y ejecución de los fines descritos en la presente autorización, y en especial los siguientes datos personales:
                        (i) nombres y apellidos completos; (ii) tipo y numero de documento de identidad (registro civil, cédula de ciudadanía,
                        tarjeta de identidad, pasaporte, cédula de extranjería, carné diplomático, DNI o identificación internacional);
                        (iii) fecha y lugar de nacimiento; (iv) dirección de residencia; (iv) escolaridad, profesión y ocupación;
                        (v) datos de contacto de familiares, tutores, representantes o responsables; (vi) número telefónico de línea móvil y/o fija;
                        (vii) dirección de correo electrónico; (viii) huella dactilar; (ix) imagen; (x) datos financieros, crediticios y/o derechos de carácter
                        económico; (xi) grupo poblacional (étnica, condición de víctima del conflicto armado, desmovilizado, etc);
                        (xii) a transferir o transmitir la información recolectada a terceros, de manera gratuita u onerosa, para que estos la utilicen como
                        consideren de acuerdo con sus fines particulares, de conformidad con lo establecido en las
                        finalidades de la Política del Tratamiento de Datos Personales; y (xiii) demás establecidos en la Política de Tratamiento de Datos
                        Personales www.starprofessional.com.co
                    </div>
                </TECollapse>
            </div>
            {/* Elemento 18# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element18"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element18")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        finalidades del tratamiento de mis datos personales
                        <span
                            className={`${activeElement === "element18"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element18"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        Dicha autorización para el tratamiento de mis datos personales se extiende durante la totalidad del tiempo
                        en el que pueda llegar consolidarse un vínculo o este persista por cualquier circunstancia con Importadora Star,
                        y con posterioridad al finiquito del mismo, siempre que tal tratamiento se encuentre relacionado con las finalidades
                        para las cuales los datos personales, fueron inicialmente suministrados y la temporalidad establecida en la
                        Política de Tratamiento de Datos Personales www.starprofessional.com.co
                    </div>
                </TECollapse>
            </div>
            {/* Elemeto 19# */}
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button
                        className={`${activeElement === "element19"
                            ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            : `transition-none rounded-b-[15px]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base 
                            text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none 
                            dark:bg-neutral-800 dark:text-white uppercase font-semibold`}
                        type="button"
                        onClick={() => handleClick("element19")}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        declaraciones, reconocimientos y aceptación
                        <span
                            className={`${activeElement === "element19"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </h2>
                <TECollapse
                    show={activeElement === "element19"}
                    className="!mt-0 !shadow-none"
                >
                    <div className="px-5 py-4">
                        De igual forma, declaro que Importadora Star me ha informado plena y suficientemente acerca de los
                        derechos que el ordenamiento legal y la jurisprudencia me reconocen como titular de datos personales, y declaro,
                        reconozco y acepto que la información suministrada a Importadora Star de forma voluntaria es verídica y
                        que no se ha omitido o adulterado ninguna información. En atención a que es posible que se requiera
                        información relativa a mi imagen y mis datos biométricos, manifiesto que autorizo de manera, previa,
                        expresa e informada a Importadora Star o a quién esta delegue, o a quién represente sus derechos, o a
                        quién en el futuro detente su posición contractual para que realicen el tratamiento de datos de carácter
                        sensible. Así mismo, autorizo para que mis datos personales sean recolectados, almacenados, usados, procesados,
                        transferidos y/o transmitidos, a nivel nacional e internacional especialmente a filiales o compañías aliadas,
                        por parte de Importadora Star o quien ésta determine. A su turno, declaro que entiendo, acepto y reconozco
                        que he sido informado por Importadora Star del carácter facultativo de la entrega de datos personales de carácter
                        sensible. Reconozco y acepto que me han sido informados y conozco los derechos que el ordenamiento
                        legal y jurisprudencial me conceden como titular de datos personales, y que incluyen entre otras
                        prerrogativas las que a continuación se relacionan: (a) conocer, actualizar y rectificar mis datos personales;
                        (b) solicitar prueba de la autorización otorgada para el tratamiento de mis datos personales;
                        (c) ser informado del uso que le han dado a mis datos personales; (d) presentar quejas ante la Superintendencia
                        de Industria y Comercio; (e) revocar la autorización para el tratamiento de mis datos personales y/o a
                        solicitar la supresión de mis datos personales de las bases de datos de Importadora Star.
                        Declaro conocer la Política de Tratamiento de Datos Personales de Importadora Star
                        que se encuentra en la página web www.starprofessional.com.co en caso de que requiera ejercer
                        alguno de los derechos que me asisten como titular de datos personales, puedo dirigir mi solicitud a través
                        de los procedimientos establecidos en la Política de Tratamiento de Datos Personales de Importadora Star.
                    </div>
                </TECollapse>
            </div>
        </div>
    )
}

export default DataProcessing;
