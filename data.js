const WorkshatiData = {

  carTypes: [
    { id: 'sedan', name: { ar: 'سيدان', en: 'Sedan' }, icon: 'fa-car' },
    { id: 'suv', name: { ar: 'دفع رباعي', en: 'SUV' }, icon: 'fa-car' },
    { id: 'pickup', name: { ar: 'بيك أب', en: 'Pickup' }, icon: 'fa-truck' },
    { id: 'hatchback', name: { ar: 'هاتشباك', en: 'Hatchback' }, icon: 'fa-car' },
    { id: 'coupe', name: { ar: 'كوبيه', en: 'Coupe' }, icon: 'fa-car' },
    { id: 'van', name: { ar: 'فان', en: 'Van' }, icon: 'fa-van' },
  ],

  systems: [
    {
      id: 'engine',
      name: { ar: 'نظام المحرك', en: 'Engine System' },
      icon: 'fa-fire',
      image: 'engine_system.png',
      color: '#C9A84C',
      partsCount: 12,
      faultsCount: 8,
      description: {
        ar: 'قلب السيارة الذي يحوّل الوقود إلى طاقة حركية. يتكون من مئات القطع المتناسقة التي تعمل معاً لتوليد القوة اللازمة للحركة.',
        en: 'The heart of the car that converts fuel into kinetic energy. It consists of hundreds of coordinated parts that work together to generate the power needed for movement.'
      },
      badge: { ar: 'الأكثر أهمية', en: 'Most Important' }
    },
    {
      id: 'brakes',
      name: { ar: 'نظام الفرامل', en: 'Brake System' },
      icon: 'fa-circle-stop',
      image: 'braking_system.png',
      color: '#D64045',
      partsCount: 8,
      faultsCount: 6,
      description: {
        ar: 'النظام المسؤول عن إيقاف السيارة وإبطاء سرعتها بأمان. يعتبر من أهم أنظمة السلامة في السيارة.',
        en: 'The system responsible for stopping and slowing the car safely. It is one of the most important safety systems in the car.'
      },
      badge: { ar: 'سلامة حيوية', en: 'Vital Safety' }
    },
    {
      id: 'battery',
      name: { ar: 'نظام البطارية والكهرباء', en: 'Battery & Electrical' },
      icon: 'fa-battery-full',
      image: 'battery_electrical_system.png',
      color: '#2D6A4F',
      partsCount: 10,
      faultsCount: 7,
      description: {
        ar: 'يوفر الطاقة الكهربائية لجميع أجزاء السيارة من تشغيل المحرك إلى الإضاءة والأجهزة الإلكترونية.',
        en: 'Provides electrical power to all parts of the car from starting the engine to lighting and electronic devices.'
      },
      badge: { ar: 'طاقة السيارة', en: 'Car Power' }
    },
    {
      id: 'suspension',
      name: { ar: 'نظام التعليق', en: 'Suspension System' },
      icon: 'fa-car',
      image: 'suspension_system.png',
      color: '#1B4F72',
      partsCount: 9,
      faultsCount: 5,
      description: {
        ar: 'يمتص الصدمات ويحافظ على استقرار السيارة أثناء القيادة على الطرق الوعرة، مما يوفر راحة القيادة.',
        en: 'Absorbs shocks and maintains vehicle stability while driving on rough roads, providing driving comfort.'
      },
      badge: { ar: 'راحة القيادة', en: 'Driving Comfort' }
    },
    {
      id: 'cooling',
      name: { ar: 'نظام التبريد', en: 'Cooling System' },
      icon: 'fa-fan',
      image: 'cooling_system.png',
      color: '#0077B6',
      partsCount: 7,
      faultsCount: 5,
      description: {
        ar: 'يحافظ على درجة حرارة المحرك ضمن النطاق الآمن لمنع ارتفاع الحرارة والأضرار الناتجة عنها.',
        en: 'Maintains the engine temperature within the safe range to prevent overheating and resulting damage.'
      },
      badge: { ar: 'حماية المحرك', en: 'Engine Protection' }
    },
    {
      id: 'transmission',
      name: { ar: 'نظام ناقل الحركة', en: 'Transmission System' },
      icon: 'fa-cog',
      image: 'transmission_system.png',
      color: '#6A0572',
      partsCount: 8,
      faultsCount: 6,
      description: {
        ar: 'ينقل الطاقة من المحرك إلى العجلات ويتحكم في سرعة السيارة عبر تروس متعددة.',
        en: 'Transfers power from the engine to the wheels and controls vehicle speed through multiple gears.'
      },
      badge: { ar: 'نقل الطاقة', en: 'Power Transfer' }
    },
    {
      id: 'exhaust',
      name: { ar: 'نظام العادم', en: 'Exhaust System' },
      icon: 'fa-wind',
      image: 'exhaust_system.png',
      color: '#4A4540',
      partsCount: 6,
      faultsCount: 4,
      description: {
        ar: 'يتحكم في خروج الغازات الناتجة عن الاحتراق ويقلل الضوضاء ويساعد في تحسين أداء المحرك.',
        en: 'Controls the exit of combustion gases, reduces noise, and helps improve engine performance.'
      },
      badge: { ar: 'تصريف الغازات', en: 'Gas Exhaust' }
    },
    {
      id: 'steering',
      name: { ar: 'نظام التوجيه', en: 'Steering System' },
      icon: 'fa-hand',
      image: 'steering_system.png',
      color: '#B5451B',
      partsCount: 7,
      faultsCount: 4,
      description: {
        ar: 'يتيح للسائق التحكم في اتجاه السيارة بسهولة ودقة، ويشمل نظام التوجيه المعزز بالطاقة الهيدروليكية أو الكهربائية.',
        en: 'Allows the driver to control the direction of the car easily and accurately, including hydraulic or electric power-assisted steering.'
      },
      badge: { ar: 'التحكم والاتجاه', en: 'Control & Direction' }
    }
  ],

  parts: [
    {
      id: 'piston',
      systemId: 'engine',
      name: { ar: 'المكبس (البستم)', en: 'Piston' },
      image: 'piston.png',
      icon: 'fa-fire',
      description: {
        ar: 'القطعة الأساسية في المحرك التي تتحرك داخل الأسطوانة لضغط الهواء والوقود وتحويل طاقة الاحتراق إلى حركة دورانية.',
        en: 'The main part of the engine that moves inside the cylinder to compress air and fuel and convert combustion energy into rotational motion.'
      },
      function: {
        ar: 'يضغط خليط الهواء والوقود ويستقبل قوة الاحتراق لتحريك عمود الكرنك.',
        en: 'Compresses the air-fuel mixture and receives combustion force to move the crankshaft.'
      },
      lifespan: { ar: '150,000 - 300,000 كم', en: '150,000 - 300,000 km' },
      replacementCost: { ar: '500 - 2,000 ريال', en: '$150 - $600' },
      maintenanceTip: {
        ar: 'تغيير زيت المحرك بانتظام يطيل عمر المكبس ويمنع التآكل المبكر.',
        en: 'Regular engine oil changes extend piston life and prevent premature wear.'
      },
      difficulty: { ar: 'صعب', en: 'Difficult' },
      urgency: 'high'
    },
    {
      id: 'crankshaft',
      systemId: 'engine',
      name: { ar: 'عمود الكرنك', en: 'Crankshaft' },
      image: 'crankshaft.png',
      icon: 'fa-cog',
      description: {
        ar: 'العمود الرئيسي في المحرك الذي يحول الحركة الخطية للمكابس إلى حركة دورانية تنقل الطاقة إلى ناقل الحركة.',
        en: 'The main shaft in the engine that converts the linear motion of the pistons into rotational motion that transfers power to the transmission.'
      },
      function: {
        ar: 'تحويل الحركة الخطية إلى دورانية ونقل الطاقة للعجلات.',
        en: 'Converting linear motion to rotational and transferring power to the wheels.'
      },
      lifespan: { ar: 'عمر السيارة كاملاً', en: 'Full vehicle lifetime' },
      replacementCost: { ar: '2,000 - 8,000 ريال', en: '$600 - $2,500' },
      maintenanceTip: {
        ar: 'الحفاظ على مستوى زيت المحرك الصحيح يحمي عمود الكرنك من التلف.',
        en: 'Maintaining the correct engine oil level protects the crankshaft from damage.'
      },
      difficulty: { ar: 'صعب جداً', en: 'Very Difficult' },
      urgency: 'high'
    },
    {
      id: 'spark-plug',
      systemId: 'engine',
      name: { ar: 'شمعة الإشعال', en: 'Spark Plug' },
      image: 'spark_plug.png',
      icon: 'fa-lightbulb',
      description: {
        ar: 'قطعة صغيرة تولد شرارة كهربائية لإشعال خليط الهواء والوقود داخل الأسطوانة في الوقت المناسب.',
        en: 'A small part that generates an electric spark to ignite the air-fuel mixture inside the cylinder at the right time.'
      },
      function: {
        ar: 'إشعال خليط الهواء والوقود لبدء عملية الاحتراق.',
        en: 'Igniting the air-fuel mixture to start the combustion process.'
      },
      lifespan: { ar: '30,000 - 100,000 كم', en: '30,000 - 100,000 km' },
      replacementCost: { ar: '50 - 300 ريال', en: '$15 - $100' },
      maintenanceTip: {
        ar: 'استبدل شمعات الإشعال كل 30,000 كم لضمان أداء المحرك الأمثل.',
        en: 'Replace spark plugs every 30,000 km to ensure optimal engine performance.'
      },
      difficulty: { ar: 'سهل', en: 'Easy' },
      urgency: 'medium'
    },
    {
      id: 'camshaft',
      systemId: 'engine',
      name: { ar: 'عمود الكامة', en: 'Camshaft' },
      image: 'camshaft.png',
      icon: 'fa-gears',
      description: {
        ar: 'يتحكم في فتح وإغلاق صمامات الهواء والعادم في المحرك بتوقيت دقيق لضمان كفاءة الاحتراق.',
        en: 'Controls the opening and closing of air and exhaust valves in the engine with precise timing to ensure combustion efficiency.'
      },
      function: {
        ar: 'التحكم في توقيت الصمامات لضمان دخول الهواء وخروج الغازات بكفاءة.',
        en: 'Controlling valve timing to ensure efficient air intake and gas exhaust.'
      },
      lifespan: { ar: '150,000 - 250,000 كم', en: '150,000 - 250,000 km' },
      replacementCost: { ar: '1,500 - 5,000 ريال', en: '$450 - $1,500' },
      maintenanceTip: {
        ar: 'تغيير زيت المحرك في الوقت المحدد يحافظ على عمود الكامة.',
        en: 'Changing engine oil on time preserves the camshaft.'
      },
      difficulty: { ar: 'صعب', en: 'Difficult' },
      urgency: 'high'
    },
    {
      id: 'timing-belt',
      systemId: 'engine',
      name: { ar: 'سير التوقيت', en: 'Timing Belt' },
      image: 'timing_belt.png',
      icon: 'fa-link',
      description: {
        ar: 'يربط عمود الكرنك بعمود الكامة ويضمن تزامن حركتهما بدقة لضمان عمل المحرك بكفاءة.',
        en: 'Connects the crankshaft to the camshaft and ensures their synchronized movement for efficient engine operation.'
      },
      function: {
        ar: 'مزامنة حركة عمود الكرنك وعمود الكامة لضمان التوقيت الصحيح.',
        en: 'Synchronizing the movement of the crankshaft and camshaft to ensure correct timing.'
      },
      lifespan: { ar: '60,000 - 100,000 كم', en: '60,000 - 100,000 km' },
      replacementCost: { ar: '300 - 1,200 ريال', en: '$100 - $400' },
      maintenanceTip: {
        ar: 'استبدل سير التوقيت قبل انتهاء عمره الافتراضي لتجنب تلف المحرك الكامل.',
        en: 'Replace the timing belt before its lifespan ends to avoid complete engine damage.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'critical'
    },
    {
      id: 'oil-filter',
      systemId: 'engine',
      name: { ar: 'فلتر الزيت', en: 'Oil Filter' },
      image: 'oil_filter.png',
      icon: 'fa-circle',
      description: {
        ar: 'يصفي الشوائب والجزيئات الصلبة من زيت المحرك لحماية الأجزاء المتحركة من التآكل.',
        en: 'Filters impurities and solid particles from engine oil to protect moving parts from wear.'
      },
      function: {
        ar: 'تنقية زيت المحرك من الشوائب للحفاظ على سلامة القطع الداخلية.',
        en: 'Purifying engine oil from impurities to maintain the safety of internal parts.'
      },
      lifespan: { ar: '5,000 - 10,000 كم', en: '5,000 - 10,000 km' },
      replacementCost: { ar: '30 - 100 ريال', en: '$10 - $30' },
      maintenanceTip: {
        ar: 'غيّر فلتر الزيت مع كل تغيير زيت للمحرك.',
        en: 'Change the oil filter with every engine oil change.'
      },
      difficulty: { ar: 'سهل', en: 'Easy' },
      urgency: 'medium'
    },
    {
      id: 'air-filter',
      systemId: 'engine',
      name: { ar: 'فلتر الهواء', en: 'Air Filter' },
      image: 'air_filter.png',
      icon: 'fa-wind',
      description: {
        ar: 'يمنع الغبار والشوائب من الدخول إلى المحرك مع الهواء، مما يحمي الأسطوانات والمكابس من التآكل.',
        en: 'Prevents dust and impurities from entering the engine with air, protecting cylinders and pistons from wear.'
      },
      function: {
        ar: 'تنقية الهواء الداخل للمحرك من الغبار والجزيئات الضارة.',
        en: 'Purifying the air entering the engine from dust and harmful particles.'
      },
      lifespan: { ar: '15,000 - 30,000 كم', en: '15,000 - 30,000 km' },
      replacementCost: { ar: '40 - 150 ريال', en: '$12 - $50' },
      maintenanceTip: {
        ar: 'فحص فلتر الهواء كل 15,000 كم واستبداله عند الحاجة.',
        en: 'Check the air filter every 15,000 km and replace when needed.'
      },
      difficulty: { ar: 'سهل جداً', en: 'Very Easy' },
      urgency: 'low'
    },
    {
      id: 'fuel-injector',
      systemId: 'engine',
      name: { ar: 'حاقن الوقود', en: 'Fuel Injector' },
      image: 'fuel_injector.png',
      icon: 'fa-spray-can',
      description: {
        ar: 'يحقن الوقود بدقة عالية داخل أسطوانات المحرك بكميات محددة وفي توقيت مثالي لضمان الاحتراق الكامل.',
        en: 'Injects fuel with high precision into engine cylinders in specific quantities and at optimal timing to ensure complete combustion.'
      },
      function: {
        ar: 'رش الوقود بدقة داخل الأسطوانات لضمان احتراق كامل وكفاءة عالية.',
        en: 'Spraying fuel precisely into cylinders to ensure complete combustion and high efficiency.'
      },
      lifespan: { ar: '100,000 - 150,000 كم', en: '100,000 - 150,000 km' },
      replacementCost: { ar: '200 - 800 ريال للحاقن الواحد', en: '$60 - $250 per injector' },
      maintenanceTip: {
        ar: 'استخدام وقود عالي الجودة وإضافات تنظيف الحاقنات يطيل عمرها.',
        en: 'Using high-quality fuel and injector cleaning additives extends their life.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'medium'
    },

    {
      id: 'brake-pad',
      systemId: 'brakes',
      name: { ar: 'تيل الفرامل', en: 'Brake Pad' },
      image: 'brake_pads.png',
      icon: 'fa-circle-stop',
      description: {
        ar: 'قطعة الاحتكاك التي تضغط على قرص الفرامل لإبطاء السيارة. تتآكل تدريجياً مع الاستخدام وتحتاج إلى استبدال دوري.',
        en: 'The friction piece that presses against the brake disc to slow the car. It gradually wears with use and needs periodic replacement.'
      },
      function: {
        ar: 'إنشاء قوة احتكاك مع قرص الفرامل لإبطاء السيارة وإيقافها.',
        en: 'Creating friction force with the brake disc to slow and stop the car.'
      },
      lifespan: { ar: '30,000 - 70,000 كم', en: '30,000 - 70,000 km' },
      replacementCost: { ar: '150 - 600 ريال للمحور', en: '$50 - $200 per axle' },
      maintenanceTip: {
        ar: 'افحص تيل الفرامل كل 20,000 كم واستبدله عند وصوله لسماكة 3 مم أو أقل.',
        en: 'Check brake pads every 20,000 km and replace when thickness reaches 3mm or less.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'critical'
    },
    {
      id: 'brake-disc',
      systemId: 'brakes',
      name: { ar: 'قرص الفرامل', en: 'Brake Disc/Rotor' },
      image: 'brake_disc.png',
      icon: 'fa-circle',
      description: {
        ar: 'القرص المعدني الدوار الذي يضغط عليه تيل الفرامل لإبطاء السيارة. يتآكل مع الوقت ويحتاج إلى تخريط أو استبدال.',
        en: 'The rotating metal disc that the brake pad presses against to slow the car. It wears over time and needs turning or replacement.'
      },
      function: {
        ar: 'استقبال ضغط تيل الفرامل وتحويل الطاقة الحركية إلى حرارة.',
        en: 'Receiving brake pad pressure and converting kinetic energy into heat.'
      },
      lifespan: { ar: '60,000 - 120,000 كم', en: '60,000 - 120,000 km' },
      replacementCost: { ar: '300 - 1,200 ريال للمحور', en: '$100 - $400 per axle' },
      maintenanceTip: {
        ar: 'استبدل قرص الفرامل عند ظهور خدوش عميقة أو عند تغيير التيل.',
        en: 'Replace the brake disc when deep scratches appear or when changing pads.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'critical'
    },
    {
      id: 'brake-caliper',
      systemId: 'brakes',
      name: { ar: 'كاليبر الفرامل', en: 'Brake Caliper' },
      image: 'brake_caliper.png',
      icon: 'fa-fist-raised',
      description: {
        ar: 'الجهاز الهيدروليكي الذي يضغط تيل الفرامل على القرص. يحتوي على مكابس هيدروليكية تستجيب لضغط البيدال.',
        en: 'The hydraulic device that presses the brake pads against the disc. Contains hydraulic pistons that respond to pedal pressure.'
      },
      function: {
        ar: 'تحويل ضغط سائل الفرامل إلى قوة ميكانيكية تضغط التيل على القرص.',
        en: 'Converting brake fluid pressure into mechanical force that presses the pad against the disc.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '400 - 1,500 ريال', en: '$120 - $500' },
      maintenanceTip: {
        ar: 'افحص الكاليبر عند كل تغيير تيل وتأكد من عدم وجود تسرب في السائل.',
        en: 'Check the caliper at every pad change and ensure there is no fluid leak.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'high'
    },
    {
      id: 'brake-fluid',
      systemId: 'brakes',
      name: { ar: 'سائل الفرامل', en: 'Brake Fluid' },
      image: 'brake_fluid.png',
      icon: 'fa-droplet',
      description: {
        ar: 'السائل الهيدروليكي الذي ينقل قوة الضغط من بيدال الفرامل إلى الكاليبرات لتشغيل الفرامل.',
        en: 'The hydraulic fluid that transfers pressure force from the brake pedal to the calipers to operate the brakes.'
      },
      function: {
        ar: 'نقل ضغط البيدال عبر خطوط الفرامل لتشغيل الكاليبرات.',
        en: 'Transferring pedal pressure through brake lines to operate the calipers.'
      },
      lifespan: { ar: '2 سنوات أو 40,000 كم', en: '2 years or 40,000 km' },
      replacementCost: { ar: '80 - 200 ريال', en: '$25 - $65' },
      maintenanceTip: {
        ar: 'غيّر سائل الفرامل كل سنتين لأنه يمتص الرطوبة مع الوقت مما يقلل كفاءته.',
        en: 'Change brake fluid every two years as it absorbs moisture over time, reducing its efficiency.'
      },
      difficulty: { ar: 'سهل', en: 'Easy' },
      urgency: 'medium'
    },

    {
      id: 'battery',
      systemId: 'battery',
      name: { ar: 'البطارية', en: 'Battery' },
      image: 'battery.png',
      icon: 'fa-battery-full',
      description: {
        ar: 'تخزن الطاقة الكهربائية وتوفرها لتشغيل المحرك والأجهزة الكهربائية. تعمل بالرصاص والحامض.',
        en: 'Stores electrical energy and provides it to start the engine and power electrical devices. Works with lead and acid.'
      },
      function: {
        ar: 'تخزين وتوفير الطاقة الكهربائية لتشغيل المحرك والأجهزة.',
        en: 'Storing and providing electrical energy to start the engine and devices.'
      },
      lifespan: { ar: '3 - 5 سنوات', en: '3 - 5 years' },
      replacementCost: { ar: '200 - 800 ريال', en: '$60 - $250' },
      maintenanceTip: {
        ar: 'تحقق من مستوى ماء البطارية شهرياً وافحص الأطراف من الصدأ.',
        en: 'Check battery water level monthly and inspect terminals for corrosion.'
      },
      difficulty: { ar: 'سهل', en: 'Easy' },
      urgency: 'medium'
    },
    {
      id: 'alternator',
      systemId: 'battery',
      name: { ar: 'الدينامو (المولد)', en: 'Alternator' },
      image: 'alternator.png',
      icon: 'fa-fan',
      description: {
        ar: 'يولد الكهرباء أثناء تشغيل المحرك لشحن البطارية وتشغيل الأجهزة الكهربائية.',
        en: 'Generates electricity while the engine is running to charge the battery and power electrical devices.'
      },
      function: {
        ar: 'تحويل الطاقة الميكانيكية للمحرك إلى طاقة كهربائية لشحن البطارية.',
        en: 'Converting engine mechanical energy into electrical energy to charge the battery.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '500 - 2,000 ريال', en: '$150 - $600' },
      maintenanceTip: {
        ar: 'افحص سير الدينامو بانتظام وتأكد من شد الأسلاك الكهربائية.',
        en: 'Regularly check the alternator belt and ensure electrical wires are tight.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'high'
    },
    {
      id: 'starter',
      systemId: 'battery',
      name: { ar: 'موتور البادئ (الاستارتر)', en: 'Starter Motor' },
      image: 'starter_motor.png',
      icon: 'fa-plug',
      description: {
        ar: 'المحرك الكهربائي الذي يدير المحرك الرئيسي عند الإقلاع. يعمل لثوانٍ قليلة ثم يتوقف بعد تشغيل المحرك.',
        en: 'The electric motor that cranks the main engine at startup. Works for a few seconds then stops after the engine starts.'
      },
      function: {
        ar: 'تدوير المحرك بسرعة كافية لبدء عملية الاحتراق عند الإقلاع.',
        en: 'Rotating the engine fast enough to start the combustion process at startup.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '400 - 1,500 ريال', en: '$120 - $450' },
      maintenanceTip: {
        ar: 'تجنب الإقلاع المتكرر في فترات قصيرة لأنه يُرهق الاستارتر.',
        en: 'Avoid repeated starting in short periods as it strains the starter.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'high'
    },

    {
      id: 'shock-absorber',
      systemId: 'suspension',
      name: { ar: 'الماص (الأمورتيزير)', en: 'Shock Absorber' },
      image: 'damper.png',
      icon: 'fa-water',
      description: {
        ar: 'يمتص الاهتزازات والصدمات الناتجة عن عدم انتظام سطح الطريق ويحافظ على استقرار السيارة.',
        en: 'Absorbs vibrations and shocks from road surface irregularities and maintains vehicle stability.'
      },
      function: {
        ar: 'تخفيف الصدمات والاهتزازات لضمان راحة الركاب واستقرار السيارة.',
        en: 'Reducing shocks and vibrations to ensure passenger comfort and vehicle stability.'
      },
      lifespan: { ar: '50,000 - 100,000 كم', en: '50,000 - 100,000 km' },
      replacementCost: { ar: '300 - 1,200 ريال للقطعة', en: '$100 - $400 per unit' },
      maintenanceTip: {
        ar: 'استبدل الماصات دائماً بالتزاوج (الأمامي اليمين مع الأيسر) لضمان التوازن.',
        en: 'Always replace shock absorbers in pairs (front right with left) to ensure balance.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'medium'
    },
    {
      id: 'coil-spring',
      systemId: 'suspension',
      name: { ar: 'الزنبرك (الكويل)', en: 'Coil Spring' },
      image: 'spring.png',
      icon: 'fa-circle',
      description: {
        ar: 'يدعم وزن السيارة ويمتص الصدمات الأولية. يعمل مع الماص لتوفير نظام تعليق متوازن.',
        en: 'Supports the vehicle weight and absorbs initial shocks. Works with the shock absorber to provide a balanced suspension system.'
      },
      function: {
        ar: 'حمل وزن السيارة وامتصاص الصدمات الأولية من الطريق.',
        en: 'Carrying the vehicle weight and absorbing initial road shocks.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '200 - 800 ريال للقطعة', en: '$60 - $250 per unit' },
      maintenanceTip: {
        ar: 'افحص الزنابرك عند سماع أصوات طرق من تحت السيارة.',
        en: 'Check springs when hearing knocking sounds from under the car.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'medium'
    },

    {
      id: 'radiator',
      systemId: 'cooling',
      name: { ar: 'الرديتر (المبرد)', en: 'Radiator' },
      image: 'radiator.png',
      icon: 'fa-fan',
      description: {
        ar: 'يبرد سائل التبريد المتدفق من المحرك عبر تمريره خلال شبكة من الأنابيب الرفيعة مع تيار الهواء.',
        en: 'Cools the coolant flowing from the engine by passing it through a network of thin tubes with airflow.'
      },
      function: {
        ar: 'تبريد سائل التبريد الساخن القادم من المحرك للحفاظ على درجة حرارة آمنة.',
        en: 'Cooling the hot coolant coming from the engine to maintain a safe temperature.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '500 - 2,000 ريال', en: '$150 - $600' },
      maintenanceTip: {
        ar: 'افحص مستوى سائل التبريد أسبوعياً وتأكد من عدم وجود تسرب.',
        en: 'Check coolant level weekly and ensure there is no leak.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'high'
    },
    {
      id: 'water-pump',
      systemId: 'cooling',
      name: { ar: 'طلمبة الماء', en: 'Water Pump' },
      image: 'water_pump.png',
      icon: 'fa-water',
      description: {
        ar: 'تضخ سائل التبريد عبر نظام التبريد بأكمله لضمان توزيع متساوٍ للحرارة وتبريد فعّال للمحرك.',
        en: 'Pumps coolant throughout the entire cooling system to ensure even heat distribution and effective engine cooling.'
      },
      function: {
        ar: 'ضخ سائل التبريد عبر المحرك والرديتر لتوزيع الحرارة وتبريدها.',
        en: 'Pumping coolant through the engine and radiator to distribute and cool heat.'
      },
      lifespan: { ar: '60,000 - 100,000 كم', en: '60,000 - 100,000 km' },
      replacementCost: { ar: '300 - 1,000 ريال', en: '$100 - $320' },
      maintenanceTip: {
        ar: 'استبدل طلمبة الماء مع سير التوقيت لأنهما يُستبدلان معاً عادةً.',
        en: 'Replace the water pump with the timing belt as they are usually replaced together.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'high'
    },

    {
      id: 'gearbox',
      systemId: 'transmission',
      name: { ar: 'علبة التروس', en: 'Gearbox' },
      image: 'gearbox.png',
      icon: 'fa-cog',
      description: {
        ar: 'تحتوي على مجموعة من التروس المتداخلة التي تتيح للسائق التحكم في سرعة السيارة وقوة الجر.',
        en: 'Contains a set of interlocking gears that allow the driver to control vehicle speed and traction force.'
      },
      function: {
        ar: 'تغيير نسبة التروس لتوفير القوة والسرعة المناسبة حسب ظروف القيادة.',
        en: 'Changing gear ratios to provide appropriate power and speed according to driving conditions.'
      },
      lifespan: { ar: '150,000 - 300,000 كم', en: '150,000 - 300,000 km' },
      replacementCost: { ar: '3,000 - 15,000 ريال', en: '$900 - $4,500' },
      maintenanceTip: {
        ar: 'غيّر زيت علبة التروس كل 60,000 كم وتجنب تغيير التروس بعنف.',
        en: 'Change gearbox oil every 60,000 km and avoid harsh gear changes.'
      },
      difficulty: { ar: 'صعب جداً', en: 'Very Difficult' },
      urgency: 'high'
    },

    {
      id: 'catalytic-converter',
      systemId: 'exhaust',
      name: { ar: 'المحول الحفازي', en: 'Catalytic Converter' },
      image: 'catalytic_converter.png',
      icon: 'fa-leaf',
      description: {
        ar: 'يحول الغازات الضارة الناتجة عن الاحتراق إلى غازات أقل ضرراً قبل خروجها من العادم.',
        en: 'Converts harmful combustion gases into less harmful gases before they exit the exhaust.'
      },
      function: {
        ar: 'تقليل انبعاثات الغازات الضارة مثل أول أكسيد الكربون والهيدروكربونات.',
        en: 'Reducing harmful gas emissions such as carbon monoxide and hydrocarbons.'
      },
      lifespan: { ar: '100,000 - 200,000 كم', en: '100,000 - 200,000 km' },
      replacementCost: { ar: '800 - 3,000 ريال', en: '$250 - $900' },
      maintenanceTip: {
        ar: 'استخدام الوقود الصحيح وإصلاح أي عطل في المحرك يحمي المحول الحفازي.',
        en: 'Using the correct fuel and fixing any engine faults protects the catalytic converter.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'medium'
    },

    {
      id: 'power-steering',
      systemId: 'steering',
      name: { ar: 'مضخة التوجيه المعزز', en: 'Power Steering Pump' },
      image: 'power_steering_pump.png',
      icon: 'fa-rotate-left',
      description: {
        ar: 'توفر قوة هيدروليكية أو كهربائية لتسهيل تحريك المقود، مما يقلل الجهد المبذول من السائق.',
        en: 'Provides hydraulic or electric power to facilitate steering wheel movement, reducing driver effort.'
      },
      function: {
        ar: 'تخفيف جهد تحريك المقود خاصة عند السرعات المنخفضة والمناورة.',
        en: 'Reducing steering wheel effort especially at low speeds and maneuvering.'
      },
      lifespan: { ar: '100,000 - 150,000 كم', en: '100,000 - 150,000 km' },
      replacementCost: { ar: '500 - 2,000 ريال', en: '$150 - $600' },
      maintenanceTip: {
        ar: 'افحص مستوى سائل التوجيه المعزز بانتظام وتجنب الضغط الكامل على المقود.',
        en: 'Regularly check power steering fluid level and avoid full steering wheel lock.'
      },
      difficulty: { ar: 'متوسط', en: 'Medium' },
      urgency: 'medium'
    }
  ],

  faults: [
    {
      id: 'engine-overheating',
      systemId: 'engine',
      name: { ar: 'ارتفاع درجة حرارة المحرك', en: 'Engine Overheating' },
      severity: 'critical',
      icon: 'fa-temperature-high',
      description: {
        ar: 'ارتفاع مؤشر الحرارة في لوحة القيادة إلى الحد الأقصى مع ظهور بخار من تحت الغطاء.',
        en: 'Temperature gauge rising to maximum on the dashboard with steam appearing from under the hood.'
      },
      causes: {
        ar: ['نقص سائل التبريد', 'تلف طلمبة الماء', 'انسداد الرديتر', 'تسرب في نظام التبريد', 'تلف ثرموستات'],
        en: ['Low coolant', 'Water pump failure', 'Clogged radiator', 'Cooling system leak', 'Thermostat failure']
      },
      symptoms: {
        ar: ['مؤشر الحرارة في الأحمر', 'بخار من الغطاء', 'رائحة حرق', 'فقدان القدرة'],
        en: ['Temperature gauge in red', 'Steam from hood', 'Burning smell', 'Power loss']
      },
      solutions: {
        ar: ['أوقف السيارة فوراً', 'اتركها تبرد 30 دقيقة', 'افحص مستوى سائل التبريد', 'توجه للورشة فوراً'],
        en: ['Stop the car immediately', 'Let it cool for 30 minutes', 'Check coolant level', 'Go to workshop immediately']
      },
      estimatedCost: { ar: '200 - 3,000 ريال', en: '$60 - $900' },
      urgency: 'critical',
      relatedParts: ['radiator', 'water-pump']
    },
    {
      id: 'engine-oil-leak',
      systemId: 'engine',
      name: { ar: 'تسرب زيت المحرك', en: 'Engine Oil Leak' },
      severity: 'warning',
      icon: 'fa-droplet',
      description: {
        ar: 'ظهور بقع زيت داكنة تحت السيارة مع انخفاض مستوى الزيت بشكل ملحوظ.',
        en: 'Dark oil spots appearing under the car with noticeable drop in oil level.'
      },
      causes: {
        ar: ['تلف الحشيات', 'تلف أختام الزيت', 'فلتر زيت مرخي', 'تلف غطاء الزيت'],
        en: ['Damaged gaskets', 'Damaged oil seals', 'Loose oil filter', 'Damaged oil cap']
      },
      symptoms: {
        ar: ['بقع زيت تحت السيارة', 'رائحة زيت محترق', 'دخان من المحرك', 'انخفاض مستوى الزيت'],
        en: ['Oil spots under car', 'Burning oil smell', 'Smoke from engine', 'Low oil level']
      },
      solutions: {
        ar: ['افحص مستوى الزيت يومياً', 'حدد مكان التسرب', 'استبدل الحشية أو الختم التالف', 'لا تقود مع نقص الزيت'],
        en: ['Check oil level daily', 'Identify leak location', 'Replace damaged gasket or seal', 'Do not drive with low oil']
      },
      estimatedCost: { ar: '150 - 2,000 ريال', en: '$50 - $600' },
      urgency: 'high',
      relatedParts: ['oil-filter']
    },
    {
      id: 'engine-misfire',
      systemId: 'engine',
      name: { ar: 'اضطراب المحرك (ميسفاير)', en: 'Engine Misfire' },
      severity: 'warning',
      icon: 'fa-triangle-exclamation',
      description: {
        ar: 'اهتزاز المحرك بشكل غير منتظم مع فقدان القدرة وزيادة استهلاك الوقود.',
        en: 'Engine vibrating irregularly with power loss and increased fuel consumption.'
      },
      causes: {
        ar: ['شمعات إشعال تالفة', 'حاقنات وقود متسخة', 'تلف سلك الإشعال', 'مشكلة في ضغط الأسطوانة'],
        en: ['Faulty spark plugs', 'Dirty fuel injectors', 'Ignition wire damage', 'Cylinder compression problem']
      },
      symptoms: {
        ar: ['اهتزاز المحرك', 'ضوء المحرك يضيء', 'فقدان القدرة', 'زيادة الاستهلاك'],
        en: ['Engine vibration', 'Check engine light on', 'Power loss', 'Increased consumption']
      },
      solutions: {
        ar: ['استبدل شمعات الإشعال', 'نظف حاقنات الوقود', 'افحص أسلاك الإشعال', 'اقرأ أكواد الأعطال'],
        en: ['Replace spark plugs', 'Clean fuel injectors', 'Check ignition wires', 'Read fault codes']
      },
      estimatedCost: { ar: '100 - 1,500 ريال', en: '$30 - $450' },
      urgency: 'medium',
      relatedParts: ['spark-plug', 'fuel-injector']
    },
    {
      id: 'timing-belt-failure',
      systemId: 'engine',
      name: { ar: 'تقطع سير التوقيت', en: 'Timing Belt Failure' },
      severity: 'critical',
      icon: 'fa-triangle-exclamation',
      description: {
        ar: 'من أخطر الأعطال التي تؤدي إلى تلف كامل للمحرك إذا لم يتم الاستبدال في الوقت المحدد.',
        en: 'One of the most dangerous faults that leads to complete engine damage if not replaced on time.'
      },
      causes: {
        ar: ['تجاوز العمر الافتراضي', 'التآكل التدريجي', 'تلف بكرة التوتر', 'تلف طلمبة الماء'],
        en: ['Exceeding lifespan', 'Gradual wear', 'Tensioner pulley damage', 'Water pump damage']
      },
      symptoms: {
        ar: ['عدم تشغيل المحرك', 'أصوات طرق شديدة', 'دخان كثيف', 'توقف مفاجئ للسيارة'],
        en: ['Engine not starting', 'Loud knocking sounds', 'Heavy smoke', 'Sudden car stop']
      },
      solutions: {
        ar: ['استبدل سير التوقيت قبل انتهاء عمره', 'افحص بكرة التوتر', 'استبدل طلمبة الماء معه', 'لا تتجاهل الجدول الزمني'],
        en: ['Replace timing belt before lifespan ends', 'Check tensioner pulley', 'Replace water pump with it', 'Do not ignore schedule']
      },
      estimatedCost: { ar: '500 - 5,000 ريال', en: '$150 - $1,500' },
      urgency: 'critical',
      relatedParts: ['timing-belt', 'water-pump']
    },

    {
      id: 'brake-squeal',
      systemId: 'brakes',
      name: { ar: 'صرير الفرامل', en: 'Brake Squeal' },
      severity: 'warning',
      icon: 'fa-volume-high',
      description: {
        ar: 'صوت صرير أو صفير عند الضغط على الفرامل، يشير عادةً إلى تآكل تيل الفرامل.',
        en: 'Squealing or whistling sound when applying brakes, usually indicating worn brake pads.'
      },
      causes: {
        ar: ['تآكل تيل الفرامل', 'تراكم الغبار', 'قرص فرامل تالف', 'كاليبر مقيد'],
        en: ['Worn brake pads', 'Dust accumulation', 'Damaged brake disc', 'Seized caliper']
      },
      symptoms: {
        ar: ['صوت صرير عند الفرملة', 'اهتزاز بيدال الفرامل', 'السيارة تنجرف عند الفرملة'],
        en: ['Squealing sound when braking', 'Brake pedal vibration', 'Car pulling when braking']
      },
      solutions: {
        ar: ['افحص سماكة تيل الفرامل', 'استبدل التيل إذا كان أقل من 3 مم', 'افحص القرص من الخدوش', 'نظف الكاليبر'],
        en: ['Check brake pad thickness', 'Replace pads if less than 3mm', 'Check disc for scratches', 'Clean caliper']
      },
      estimatedCost: { ar: '150 - 800 ريال', en: '$50 - $250' },
      urgency: 'high',
      relatedParts: ['brake-pad', 'brake-disc']
    },
    {
      id: 'soft-brake-pedal',
      systemId: 'brakes',
      name: { ar: 'بيدال الفرامل طري', en: 'Soft Brake Pedal' },
      severity: 'critical',
      icon: 'fa-circle-exclamation',
      description: {
        ar: 'بيدال الفرامل يصل إلى الأرضية دون توقف كافٍ، خطر جداً ويستدعي إيقاف السيارة فوراً.',
        en: 'Brake pedal reaching the floor without sufficient stopping, very dangerous and requires immediate car stop.'
      },
      causes: {
        ar: ['تسرب سائل الفرامل', 'هواء في خطوط الفرامل', 'تلف الكاليبر', 'تلف أسطوانة الفرامل الرئيسية'],
        en: ['Brake fluid leak', 'Air in brake lines', 'Caliper failure', 'Master cylinder failure']
      },
      symptoms: {
        ar: ['البيدال يصل للأرضية', 'فرملة ضعيفة جداً', 'انخفاض مستوى سائل الفرامل'],
        en: ['Pedal reaches floor', 'Very weak braking', 'Low brake fluid level']
      },
      solutions: {
        ar: ['أوقف السيارة فوراً', 'لا تقود إطلاقاً', 'اتصل بالسحب', 'افحص خطوط الفرامل فوراً'],
        en: ['Stop car immediately', 'Do not drive at all', 'Call towing', 'Check brake lines immediately']
      },
      estimatedCost: { ar: '300 - 2,000 ريال', en: '$100 - $600' },
      urgency: 'critical',
      relatedParts: ['brake-fluid', 'brake-caliper']
    },

    {
      id: 'battery-dead',
      systemId: 'battery',
      name: { ar: 'البطارية فارغة', en: 'Dead Battery' },
      severity: 'warning',
      icon: 'fa-battery-empty',
      description: {
        ar: 'عدم قدرة السيارة على الاقلاع مع ظهور أصوات طرق خفيفة أو صمت تام عند تدوير المفتاح.',
        en: 'Car unable to start with light clicking sounds or complete silence when turning the key.'
      },
      causes: {
        ar: ['قِدَم البطارية', 'ترك الأنوار مضاءة', 'تلف الدينامو', 'تسرب في البطارية', 'برودة شديدة'],
        en: ['Old battery', 'Leaving lights on', 'Alternator failure', 'Battery leak', 'Extreme cold']
      },
      symptoms: {
        ar: ['السيارة لا تشتغل', 'صوت طرق عند الإقلاع', 'الأنوار خافتة', 'الشاشات لا تعمل'],
        en: ['Car does not start', 'Clicking sound at startup', 'Dim lights', 'Screens not working']
      },
      solutions: {
        ar: ['شحن البطارية بكابلات', 'استبدل البطارية إذا كانت قديمة', 'افحص الدينامو', 'تأكد من إطفاء الأنوار'],
        en: ['Jump start with cables', 'Replace battery if old', 'Check alternator', 'Ensure lights are off']
      },
      estimatedCost: { ar: '200 - 800 ريال', en: '$60 - $250' },
      urgency: 'medium',
      relatedParts: ['battery', 'alternator']
    },
    {
      id: 'alternator-failure',
      systemId: 'battery',
      name: { ar: 'تلف الدينامو', en: 'Alternator Failure' },
      severity: 'warning',
      icon: 'fa-xmark',
      description: {
        ar: 'إضاءة مؤشر البطارية في لوحة القيادة مع تراجع تدريجي في أداء الأجهزة الكهربائية.',
        en: 'Battery warning light on dashboard with gradual decline in electrical device performance.'
      },
      causes: {
        ar: ['تآكل الفرش الكربونية', 'تلف الثنائيات', 'تلف سير الدينامو', 'ارتفاع الحرارة'],
        en: ['Carbon brush wear', 'Diode failure', 'Alternator belt damage', 'Overheating']
      },
      symptoms: {
        ar: ['مؤشر البطارية يضيء', 'تراجع الأنوار', 'البطارية تفرغ باستمرار', 'أصوات غريبة من المحرك'],
        en: ['Battery light on', 'Dimming lights', 'Battery constantly draining', 'Strange engine sounds']
      },
      solutions: {
        ar: ['افحص الدينامو بجهاز قياس', 'استبدل الدينامو', 'افحص سير الدينامو', 'افحص البطارية أيضاً'],
        en: ['Test alternator with meter', 'Replace alternator', 'Check alternator belt', 'Also check battery']
      },
      estimatedCost: { ar: '500 - 2,000 ريال', en: '$150 - $600' },
      urgency: 'high',
      relatedParts: ['alternator', 'battery']
    },

    {
      id: 'suspension-noise',
      systemId: 'suspension',
      name: { ar: 'أصوات التعليق', en: 'Suspension Noise' },
      severity: 'info',
      icon: 'fa-volume-high',
      description: {
        ar: 'أصوات طرق أو صرير عند المرور على المطبات أو عند الدوران.',
        en: 'Knocking or creaking sounds when going over bumps or when turning.'
      },
      causes: {
        ar: ['تلف الماصات', 'تلف الزنابرك', 'تلف كرة التوجيه', 'تلف مطاط التعليق'],
        en: ['Shock absorber damage', 'Spring damage', 'Ball joint damage', 'Suspension rubber damage']
      },
      symptoms: {
        ar: ['أصوات طرق من تحت السيارة', 'اهتزاز عند القيادة', 'ميل السيارة لجهة', 'تآكل غير منتظم للإطارات'],
        en: ['Knocking sounds from under car', 'Vibration while driving', 'Car leaning to one side', 'Uneven tire wear']
      },
      solutions: {
        ar: ['افحص الماصات والزنابرك', 'افحص كرات التوجيه', 'افحص مطاط التعليق', 'ضبط زوايا الإطارات'],
        en: ['Check shocks and springs', 'Check ball joints', 'Check suspension rubber', 'Align wheels']
      },
      estimatedCost: { ar: '200 - 2,000 ريال', en: '$60 - $600' },
      urgency: 'medium',
      relatedParts: ['shock-absorber', 'coil-spring']
    },

    {
      id: 'coolant-leak',
      systemId: 'cooling',
      name: { ar: 'تسرب سائل التبريد', en: 'Coolant Leak' },
      severity: 'warning',
      icon: 'fa-droplet',
      description: {
        ar: 'ظهور بقع خضراء أو حمراء تحت السيارة مع انخفاض مستوى سائل التبريد.',
        en: 'Green or red spots appearing under the car with dropping coolant level.'
      },
      causes: {
        ar: ['تلف خرطوم التبريد', 'تلف الرديتر', 'تلف طلمبة الماء', 'تلف الثرموستات'],
        en: ['Cooling hose damage', 'Radiator damage', 'Water pump damage', 'Thermostat damage']
      },
      symptoms: {
        ar: ['بقع ملونة تحت السيارة', 'ارتفاع مؤشر الحرارة', 'رائحة حلوة من المحرك', 'بخار من الغطاء'],
        en: ['Colored spots under car', 'Rising temperature gauge', 'Sweet smell from engine', 'Steam from hood']
      },
      solutions: {
        ar: ['افحص خراطيم التبريد', 'افحص الرديتر من الخارج', 'أضف سائل تبريد مؤقتاً', 'توجه للورشة فوراً'],
        en: ['Check cooling hoses', 'Inspect radiator externally', 'Add coolant temporarily', 'Go to workshop immediately']
      },
      estimatedCost: { ar: '150 - 2,500 ريال', en: '$50 - $750' },
      urgency: 'high',
      relatedParts: ['radiator', 'water-pump']
    },

    {
      id: 'transmission-slip',
      systemId: 'transmission',
      name: { ar: 'انزلاق علبة التروس', en: 'Transmission Slip' },
      severity: 'warning',
      icon: 'fa-gears',
      description: {
        ar: 'تغيير التروس بشكل غير منتظم أو تأخر في الاستجابة مع ارتفاع صوت المحرك دون زيادة السرعة.',
        en: 'Irregular gear changes or delayed response with engine revving without speed increase.'
      },
      causes: {
        ar: ['نقص زيت علبة التروس', 'تآكل الكلتش', 'تلف الصمامات الهيدروليكية', 'تلف الحزام'],
        en: ['Low transmission fluid', 'Clutch wear', 'Hydraulic valve damage', 'Band damage']
      },
      symptoms: {
        ar: ['تأخر في تغيير التروس', 'المحرك يرفع دون تسارع', 'صوت طرق عند تغيير التروس', 'رائحة حرق'],
        en: ['Delayed gear changes', 'Engine revving without acceleration', 'Knocking when shifting', 'Burning smell']
      },
      solutions: {
        ar: ['افحص مستوى زيت علبة التروس', 'غيّر الزيت إذا كان قديماً', 'افحص الكلتش', 'توجه لمتخصص'],
        en: ['Check transmission fluid level', 'Change oil if old', 'Check clutch', 'Go to specialist']
      },
      estimatedCost: { ar: '500 - 8,000 ريال', en: '$150 - $2,500' },
      urgency: 'high',
      relatedParts: ['gearbox']
    }
  ],

  maintenanceTips: [
    {
      id: 'tip-1',
      title: { ar: 'تغيير الزيت بانتظام', en: 'Regular Oil Changes' },
      desc: { ar: 'غيّر زيت المحرك كل 5,000 كم للمحافظة على المحرك وإطالة عمره.', en: 'Change engine oil every 5,000 km to maintain and extend engine life.' },
      icon: 'fa-oil-can',
      category: 'engine'
    },
    {
      id: 'tip-2',
      title: { ar: 'فحص ضغط الإطارات', en: 'Check Tire Pressure' },
      desc: { ar: 'تحقق من ضغط الإطارات أسبوعياً لضمان السلامة وتوفير الوقود.', en: 'Check tire pressure weekly to ensure safety and save fuel.' },
      icon: 'fa-circle',
      category: 'general'
    },
    {
      id: 'tip-3',
      title: { ar: 'فحص سائل التبريد', en: 'Check Coolant' },
      desc: { ar: 'تأكد من مستوى سائل التبريد أسبوعياً لمنع ارتفاع حرارة المحرك.', en: 'Check coolant level weekly to prevent engine overheating.' },
      icon: 'fa-temperature-low',
      category: 'cooling'
    },
    {
      id: 'tip-4',
      title: { ar: 'فحص الفرامل', en: 'Check Brakes' },
      desc: { ar: 'افحص تيل الفرامل كل 20,000 كم واستبدله قبل أن يصل للحد الأدنى.', en: 'Check brake pads every 20,000 km and replace before reaching minimum.' },
      icon: 'fa-circle-stop',
      category: 'brakes'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WorkshatiData;
}