---
layout: post
title: "3D Printing at BLUE1647"
date: 2015-06-25 17:11:35 -0500
comments: true
categories: [ IoT, Parallella ]
published: true
---
{% include image.html img="/images/parallella_3d_print_blue1647.jpg" caption="Parallella with a 3D-printed case." %}

Every visit to [BLUE1647](http://blue1647.com) is full of pleasant surprises. There’s new equipment, a new opportunity to learn new technology, new people to learn from, or all of the above.

I recently bought a second [Parallella](/blog/2015/05/27/massively-parallel-parallella/) for a WisdomGroup project. Since it's important to protect the device with a case, this seemed like a good time to try one of the 3D printers at BLUE1647. The result is in the photo, above.

<!--more-->

### Why 3D Printing Matters
The current state of 3D printing feels like laser printing in the 1980s. Back then, laser printers were big and expensive. Sharing the printer among many users made the cost easier to justify. 3D printers are in a similar position in the year 2015. And, as with most new technology, prices are on a downward slope. 

The 3D printers at BLUE1647 are available to any member. Talk to [Rashad Glover](http://www.rashadglover.com/) or [Patrick Harris](http://imagine-it-tech.com/) to get started.

### What to Know about 3D Printing
Printing any object in three dimensions takes a _long_ time. The case in the photo took over four hours to print. The [MakerBot Thingiverse](http://www.thingiverse.com/) has a wide variety of STL files to choose from. [This particular STL file](http://www.thingiverse.com/thing:273701/) was created by Ben Reed, a maker in Calgary, Alberta, Canada.

{% include image.html img="/images/blue1647_glover_3d_printer.jpg" caption="Industrial engineer Rashad Glover prepares the STL files for the 3D printer." %}

### STL File Internals
Instructions for 3D printing an object are stored in a [STereoLithography (STL)](http://bit.ly/1FFzX20) file. Open an STL file in [your favorite text editor](http://rayhightower.com/blog/2013/01/12/why-i-use-vim/) and you'll see something like this:

``` bash
solid OpenSCAD_Model
  facet normal -0.998027 0 -0.0627913
    outer loop
      vertex 0 66.2 1.95
      vertex 0 124 1.95
      vertex 0.020502 66.2 1.62413
    endloop
  endfacet
  facet normal -0.998027 0 -0.0627913
    outer loop
      vertex 0.020502 66.2 1.62413
      vertex 0 124 1.95
      vertex 0.020502 124 1.62413
    endloop
  endfacet

  ...Skip about 58,000 lines...

  facet normal 0.803458 -0.261061 -0.535072
    outer loop
      vertex 91.7184 1.76127 0.69744
      vertex 91.5557 1.82567 0.421758
      vertex 91.6374 2.0769 0.421758
    endloop
  endfacet
  facet normal 0.803459 -0.261059 -0.535071
    outer loop
      vertex 91.7184 1.76127 0.69744
      vertex 91.6374 2.0769 0.421758
      vertex 91.8068 2.03339 0.69744
    endloop
  endfacet
endsolid OpenSCAD_Model
  
```

The objects described in an STL file can be viewed through a free online tool like [ViewSTL.com](http://www.viewstl.com/).

### Next Steps
3D printing is still in its infancy. Next time you visit BLUE1647, maybe for a [ChicagoRuby](/blog/2015/04/10/chicagoruby-blue1647-1871/) meeting, check it out. 
