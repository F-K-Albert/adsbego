const mongoose = require('mongoose');
const User = require('./models/User');
const InvestmentPlan = require('./models/InvestmentPlan');
require('dotenv').config();

const initDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await InvestmentPlan.deleteMany({});

    // Create investment plans
    const plans = [
      {
        name: 'silver',
        title: 'Silver Partnership',
        description: 'Ideal for new investors looking for stable growth with moderate risk.',
        minInvestment: 10000,
        maxInvestment: 49999,
        annualROI: { min: 12, max: 18 },
        duration: 12,
        benefits: [
          { title: 'Quarterly Reports', description: 'Receive detailed performance reports every quarter' },
          { title: 'Core Portfolio Access', description: 'Access to our core investment portfolio' },
          { title: 'Dedicated Manager', description: 'Personal account manager for support' }
        ],
        features: [
          'Quarterly performance reports',
          'Access to core investment portfolio',
          'Dedicated account manager',
          'Email support'
        ],
        commissionRate: 15,
        priority: 1
      },
      {
        name: 'gold',
        title: 'Gold Partnership',
        description: 'For experienced investors seeking balanced growth and income.',
        minInvestment: 50000,
        maxInvestment: 249999,
        annualROI: { min: 18, max: 25 },
        duration: 12,
        benefits: [
          { title: 'Monthly Reports', description: 'Receive detailed performance reports every month' },
          { title: 'Premium Opportunities', description: 'Access to premium investment opportunities' },
          { title: 'Priority Support', description: 'Get priority customer support' },
          { title: 'Strategy Consultations', description: 'Quarterly strategy consultations with experts' }
        ],
        features: [
          'Monthly performance reports',
          'Access to premium investment opportunities',
          'Priority support',
          'Quarterly strategy consultations',
          'Phone and email support'
        ],
        commissionRate: 20,
        priority: 2
      },
      {
        name: 'platinum',
        title: 'Platinum Partnership',
        description: 'For sophisticated investors seeking maximum growth potential.',
        minInvestment: 250000,
        maxInvestment: 1000000,
        annualROI: { min: 25, max: 35 },
        duration: 12,
        benefits: [
          { title: 'Weekly Updates', description: 'Receive performance updates every week' },
          { title: 'Private Investments', description: 'Exclusive access to private investments' },
          { title: 'Personalized Strategy', description: 'Customized investment strategy' },
          { title: 'VIP Support', description: '24/7 VIP customer support' },
          { title: 'Strategy Sessions', description: 'Bi-monthly strategy sessions' }
        ],
        features: [
          'Weekly performance updates',
          'Exclusive access to private investments',
          'Personalized investment strategy',
          '24/7 VIP support',
          'Bi-monthly strategy sessions',
          'Dedicated relationship manager'
        ],
        commissionRate: 25,
        priority: 3
      }
    ];

    await InvestmentPlan.insertMany(plans);
    console.log('Investment plans created successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

initDB();