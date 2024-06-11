import mongoose, { Schema, Types, model } from 'mongoose';
const schema = new Schema(
  {
    park_name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    social_media: {
      instagram: {
        type: String,
      },
      facebook: {
        type: String,
      },
      x: {
        type: String,
      },
      mail: {
        type: String,
      },
    },
    area: {
      type: String,
    },
    cover_photo: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    banner_photo: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        _id:false
      }
    ],
    location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere',
      },
    },
    amenities: [
      {
        amenity_name: {
          type: String,
          required: true,
        },
        amenity_about: {
          type: String,
          required: true,
        },
        amenity_photo: [
          {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
        ],
        amenity_location: {
          type: {
            type: String,
            required: true,
            default: 'Point',
          },
          coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere',
          },
        },
      },
    ],
    other_services: [
      {
        service_name: {
          type: String,
          required: true,
        },
        service_about: {
          type: String,
          required: true,
        },
        service_photo: [
          {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
        ],
        is_it_paid: {
          type: Boolean,
          default: false,
          required: true,
        },
        service_types: [
          {
            service_type_name: {
              type: String,
              required: true,
            },
            service_actual_price: {
              type: Number,
              required: function (this: any) {
                if (this.is_it_paid) {
                  return true;
                }
              },
            },
            service_discounted_price: {
              type: Number,
              required: function (this: any) {
                if (this.is_it_paid) {
                  return true;
                }
              },
            },
            discount_percent: {
              type: Number,
              required: function (this: any) {
                if (this.is_it_paid) {
                  return true;
                }
              },
            },
          },
        ],
      },
    ],
    ticket_types: [
      {
        ticket_type_name: {
          type: String,
          required: true,
        },
        ticket_actual_price: {
          type: Number,
          required: true,
        },
        ticket_discounted_price: {
          type: Number,
          required: true,
        },
        discount_percent: {
          type: Number,
          required: true,
        },
      },
    ],
    metadata: {
      likesCount: {
        type: Number,
      },
      commentsCount: {
        type: Number,
      },
    },
    park_added_by: {
      type: Types.ObjectId,
      ref: 'Admin',
      required: true,
    },
  },
  {
    timestamps: true,
    _id:false
  },
);

export const Aerk = mongoose.models.Aerk || model('Aerk', schema);
